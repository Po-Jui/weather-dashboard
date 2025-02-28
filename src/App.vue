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

      <!-- weather cards -->
      <v-container>
        <v-row>
          <v-col v-for="(place, index) in places" :key="index" cols="12" md="4">
            <WeatherCard :place="place" />
          </v-col>
        </v-row>
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
