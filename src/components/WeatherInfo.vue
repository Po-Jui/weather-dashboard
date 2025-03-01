<template>
  <v-card
    class="absolute bg-white/80 backdrop-blur-sm text-slate-900 inset-x-0 bottom-0 rounded-t-lg p-8"
  >
    <!-- Close button -->
    <v-row justify="end" class="mb-10">
      <v-btn
        style="color: red; background-color: bisque"
        @click="$emit('close-info')"
        icon
      >
        <v-icon class="mr-2 mt-2">mdi-close</v-icon>
      </v-btn>
    </v-row>

    <v-row class="mb-20" justify="space-between">
      <!-- Wind speed -->
      <v-col class="text-center" cols="4">
        <v-icon class="mb-2" size="2rem">mdi-weather-windy</v-icon>
        <p class="text-h6 font-weight-bold">
          {{ place.current.wind_kph }} km/h
        </p>
        <p>wind</p>
      </v-col>
      <!-- Humidity level -->
      <v-col class="text-center" cols="4">
        <v-icon class="mb-2" size="2rem">mdi-water-percent</v-icon>
        <p class="text-h6 font-weight-bold">{{ place.current.humidity }}%</p>
        <p>humidity</p>
      </v-col>
      <!-- Precipitation -->
      <v-col class="text-center" cols="4">
        <v-icon class="mb-2" size="2rem">mdi-umbrella</v-icon>
        <p class="text-h6 font-weight-bold">{{ place.current.precip_mm }} mm</p>
        <p>precipitation</p>
      </v-col>
    </v-row>

    <v-row class="mb-10" justify="space-between">
      <!-- Wind direction -->
      <v-col class="text-center" cols="4">
        <v-icon class="mb-2" size="2rem">mdi-windsock</v-icon>
        <p class="text-h6 font-weight-bold">{{ place.current.wind_dir }}</p>
        <p>direction</p>
      </v-col>
      <!-- Feels like -->
      <v-col class="text-center" cols="4">
        <v-icon class="mb-2" size="2rem">mdi-thermometer</v-icon>
        <p class="text-h6 font-weight-bold">
          {{ Math.round(place.current.feelslike_c) }}
        </p>
        <p>Feels</p>
      </v-col>
      <!-- UV -->
      <v-col class="text-center" cols="4">
        <v-icon class="mb-2" size="2rem">mdi-weather-sunny</v-icon>
        <p class="text-h6 font-weight-bold">{{ place.current.uv }}</p>
        <p>UV index</p>
      </v-col>
    </v-row>

    <!-- Last update and delete -->
    <v-row class="justify-between items-center">
      <v-col class="text-left">
        <v-col class="d-flex align-center">
          <v-icon class="me-2" size="1rem">mdi-refresh</v-icon>
          <span class="text-body-2 text-opacity-50"
            >last update: {{ place.current.last_updated }}</span
          >
          <v-btn
            class="hover-red ml-15"
            @click="$emit('remove-place')"
            icon
            variant="text"
            color="black"
          >
            <v-icon size="1.5rem">mdi-delete</v-icon>
          </v-btn>
        </v-col>
      </v-col>
    </v-row>
  </v-card>
</template>

<script setup>
defineProps({
  place: Object,
});
</script>

<style scoped>
.hover-red:hover {
  color: red !important;
}
</style>
