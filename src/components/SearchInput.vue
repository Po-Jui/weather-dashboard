<template>
  <v-container>
    <v-row justify="center" dense>
      <v-col cols="12">
        <v-img
          class="mx-auto mb-5"
          max-height="480"
          max-width="650"
          src="https://risingnepaldaily.com/storage/media/47278/Untitled-1.gif"
          style="border-radius: 10px"
        ></v-img>
      </v-col>
    </v-row>
    <!-- search field -->
    <v-form class="position-relative">
      <v-text-field
        v-model="searchTerm.query"
        label="Search for a place"
        variant="outlined"
        prepend-inner-icon="mdi-magnify"
        hide-details
        :loading="isLoading"
        @update:modelValue="handleSearch"
        @focus="showHistory = true"
        @blur="hideHistory"
      ></v-text-field>

      <!-- search suggestions -->
      <v-card
        v-if="searchTerm.results !== null"
        class="position-absolute w-100"
        style="top: 100%; z-index: 10"
      >
        <v-list>
          <v-list-item
            v-for="place in searchTerm.results"
            :key="place.id"
            @click="getWeather(place.id)"
            class="hover:text-indigo-600 hover:font-bold"
          >
            <v-list-item-title>
              {{ place.name }}, {{ place.region }}, {{ place.country }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
      <v-card
        v-if="
          historyList.length > 0 && showHistory && searchTerm.results === null
        "
        class="position-absolute w-100"
        style="top: 100%; z-index: 10"
      >
        <v-list>
          <v-list-item
            v-for="place in historyList"
            :key="place.id"
            @click="getWeather(place.id)"
            class="d-flex align-center hover:text-indigo-600 hover:font-bold"
          >
            <v-list-item-title>
              <v-icon class="me-2" size="1.5rem">mdi-history</v-icon>
              {{ place.name }}, {{ place.region }}, {{ place.country }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-form>
  </v-container>
</template>

<script setup>
import { reactive, ref } from "vue";

const isLoading = ref(false);

const emit = defineEmits(["place-data"]);

const searchTerm = reactive({
  query: "",
  timeout: null,
  results: null,
});
const history = reactive({
  name: "",
  region: "",
  country: "",
  id: "",
  icon: null,
});
const historyList = reactive(
  localStorage.getItem("historyList")
    ? JSON.parse(localStorage.getItem("historyList"))
    : []
);

const showHistory = ref(false);

const hideHistory = () => {
  setTimeout(() => {
    if (searchTerm.results === null) showHistory.value = false;
  }, 100); // 延遲隱藏，以便點擊事件完成
};
const handleSearch = () => {
  clearTimeout(searchTerm.timeout);
  isLoading.value = true; // 立即顯示 loading

  searchTerm.timeout = setTimeout(async () => {
    if (searchTerm.query.trim() !== "") {
      try {
        const res = await fetch(
          `https://api.weatherapi.com/v1/search.json?key=${process.env.VUE_APP_WEATHERAPI_KEY}&q=${searchTerm.query}`
        );
        const data = await res.json();
        searchTerm.results = data;
      } catch (err) {
        console.log(err);
      }
    } else {
      searchTerm.results = null;
    }
    isLoading.value = false; // 結束 loading
  }, 500);
};

const getWeather = async (id) => {
  try {
    const res = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${process.env.VUE_APP_WEATHERAPI_KEY}&q=id:${id}&days=5&aqi=no&alerts=no`
    );

    if (!res.ok) {
      throw new Error(`API 回應錯誤: ${res.status} ${res.statusText}`);
    }

    let data = await res.json();
    showHistory.value = false;

    data = {
      ...data,
      id: `id-${Date.now()}-${Math.floor(Math.random() * 10000)}`,
    };

    // 建立 history 的複本
    const newHistory = {
      name: data.location.name,
      region: data.location.region,
      country: data.location.country,
      id: id,
      icon: data.current.condition.icon,
    };

    // 將複本加入 historyList
    historyList.unshift(newHistory);

    // 刪除重複的 history
    const uniqueHistoryList = historyList.filter(
      (item, index, self) =>
        index ===
        self.findIndex(
          (t) =>
            t.name === item.name && t.id === item.id && t.icon === item.icon
        )
    );

    // 更新 historyList
    historyList.splice(0, historyList.length, ...uniqueHistoryList);

    // 將 historyList 存入 localStorage
    if (historyList.length > 5) {
      historyList.pop();
    }
    localStorage.setItem("historyList", JSON.stringify(historyList));

    emit("place-data", data);

    searchTerm.query = "";
    searchTerm.results = null;
  } catch (error) {
    console.error("獲取天氣資訊時發生錯誤:", error);
  }
};
</script>
