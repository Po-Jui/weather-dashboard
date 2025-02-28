<template>
  <v-row class="mb-2" align="center" justify="space-between">
    <!-- Day of the week -->
    <v-col class="text-center" cols="4">
      <v-typography class="text-body-1">
        {{
          new Date(day.date).toLocaleDateString("en-us", { weekday: "long" })
        }}
      </v-typography>
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
      <v-typography class="text-body-1">
        {{ Math.round(day.day.maxtemp_c) }}&deg; /
        {{ Math.round(day.day.mintemp_c) }}&deg;
      </v-typography>
    </v-col>
  </v-row>
</template>

<script setup>
defineProps({
  day: Object,
});
</script>
