<template>
  <v-app>
    <v-main>
      <!-- search -->
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="6">
            <SearchInput @place-data="addPlace" />
          </v-col>
        </v-row>
        <v-row justify="center"
          ><v-progress-circular
            v-if="isLoading"
            indeterminate
            color="primary"
          ></v-progress-circular
        ></v-row>
      </v-container>

      <!-- weather cards 瀑布流排版 -->
      <v-container class="mt-15">
        <div class="masonry-grid">
          <WeatherCard
            v-for="(place, index) in places"
            :key="index"
            :place="place"
            class="masonry-item"
            @delete-place="deletePlace"
          />
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import SearchInput from "./components/SearchInput.vue";
import WeatherCard from "./components/WeatherCard.vue";
import Swal from "sweetalert2";
import { ref } from "vue";

const isLoading = ref(false);

const places = ref([]);

const addPlace = (place) => {
  console.log(place);
  isLoading.value = true; // 開始 loading

  setTimeout(() => {
    places.value.push(place);
    places.value.reverse();
    isLoading.value = false; // 停止 loading
    Swal.fire({
      title: "successfully added!",
      text: "You added a new place",
      icon: "success",
    });
  }, 1000); // 模擬 1 秒的處理時間
};

const deletePlace = (id) => {
  console.log(name);
  console.log(places.value);
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      setTimeout(() => {
        places.value = places.value.filter((place) => place.id !== id);
      }, 1000);
      Swal.fire({
        title: "Deleted!",
        html: `<strong><span style="color: red;">${name}</span></strong> has been deleted.`,
        icon: "success",
      });
    }
  });
};
</script>

<style scoped>
.masonry-grid {
  column-count: 3;
  column-gap: 12px;
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: 12px;
}

@media (max-width: 1200px) {
  .masonry-grid {
    column-count: 2;
  }
}

@media (max-width: 600px) {
  .masonry-grid {
    column-count: 1;
  }
}
</style>
