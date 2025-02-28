<template>
  <v-row class="mb-2" align="center" justify="space-between">
    <!-- Day of the week -->
    <v-col class="text-center" cols="4">
      <span>
        {{
          new Date(day.date).toLocaleDateString("en-us", { weekday: "long" })
        }}
      </span>
    </v-col>

    <!-- Icon -->
    <v-col class="text-center" cols="4">
      <v-img
        :src="day.day.condition.icon"
        alt="icon"
        width="30"
        class="mx-auto"
      />
    </v-col>

    <!-- High/Low Temp -->
    <v-col class="text-center" cols="4">
      <span v-if="degreeType === true"
        >{{ Math.round(day.day.maxtemp_c) }}&deg;C /
        {{ Math.round(day.day.mintemp_c) }}&deg;C</span
      >
      <span v-if="degreeType === false"
        >{{ Math.round(day.day.maxtemp_f) }}&deg;F /
        {{ Math.round(day.day.mintemp_f) }}&deg;F</span
      >
    </v-col>
  </v-row>
</template>

<script setup>
defineProps({
  day: Object,
  degreeType: Boolean,
});
</script>
