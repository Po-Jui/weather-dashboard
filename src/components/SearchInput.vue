<template>
  <v-container>
    <v-row justify="center" dense>
      <v-col cols="12">
        <v-img
          class="mx-auto mb-5"
          max-height="480"
          max-width="650"
          src="https://risingnepaldaily.com/storage/media/47278/Untitled-1.gif"
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
        @input="handleSearch"
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
    </v-form>
  </v-container>
</template>

<script setup>
import { reactive } from "vue";

const emit = defineEmits(["place-data"]);

const searchTerm = reactive({
  query: "",
  timeout: null,
  results: null,
});

const handleSearch = () => {
  clearTimeout(searchTerm.timeout);
  searchTerm.timeout = setTimeout(async () => {
    if (searchTerm.query !== "") {
      const res = await fetch(
        `https://api.weatherapi.com/v1/search.json?key=${process.env.VUE_APP_WEATHERAPI_KEY}&q=${searchTerm.query}`
      ).catch((err) => console.log(err));

      const data = await res.json();
      searchTerm.results = data;
    } else {
      searchTerm.results = null;
    }
  }, 500);
};

const getWeather = async (id) => {
  const res = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${process.env.VUE_APP_WEATHERAPI_KEY}&q=id:${id}&days=5&aqi=no&alerts=no`
  ).catch((err) => console.log(err));

  const data = await res.json();
  console.log(data);
  emit("place-data", data);

  searchTerm.query = "";
  searchTerm.results = null;
};
</script>
