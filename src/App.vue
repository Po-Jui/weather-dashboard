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
      </v-container>

      <!-- weather cards 瀑布流排版 -->
      <v-container>
        <div class="masonry-grid">
          <WeatherCard
            v-for="(place, index) in places"
            :key="index"
            :place="place"
            class="masonry-item"
          />
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import SearchInput from "./components/SearchInput.vue";
import WeatherCard from "./components/WeatherCard.vue";
import { ref } from "vue";

const places = ref([]);

const addPlace = (place) => places.value.unshift(place);
</script>

<style scoped>
.masonry-grid {
  column-count: 3;
  column-gap: 16px;
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: 16px;
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
