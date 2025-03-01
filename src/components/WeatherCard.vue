<template>
  <v-card
    :class="place.current.is_day === 1 ? 'bg-day' : 'bg-night'"
    class="text-white p-6 rounded-lg shadow-lg gap-2 relative overflow-hidden"
  >
    <!-- Location & time -->
    <v-row class="mt-2">
      <v-col class="d-flex align-center ml-4">
        <v-icon class="me-2">mdi-map-marker</v-icon>
        <h3 class="text-lg">{{ place.location.name }}</h3>
      </v-col>
      <v-col class="d-flex align-center justify-end pe-4 mr-4">
        <v-icon class="me-2" size="2rem" @click="toggleBookmark(place)">
          mdi-bookmark
        </v-icon>
      </v-col>
    </v-row>

    <!-- current weather -->
    <v-card-text class="text-center">
      <v-img
        :src="place.current.condition.icon"
        alt="icon"
        width="150"
        class="mx-auto"
        contain
      ></v-img>
      <v-row style="margin-top: -20px">
        <v-col class="d-flex justify-center ml-4">
          <v-switch
            v-model="model"
            :label="`&deg;${model ? 'C' : 'F'}`"
            hide-details
            inset
          ></v-switch>
        </v-col>
      </v-row>
      <h1 class="mr-4 ml-6" style="font: 5em sans-serif">
        <span v-if="!model">{{ Math.round(place.current.temp_f) }}&deg;F</span>
        <span v-else>{{ Math.round(place.current.temp_c) }}&deg;C</span>
      </h1>
      <p class="text-lg mt-2">{{ place.current.condition.text }}</p>
      <v-row class="mt-2">
        <v-col class="d-flex align-center justify-center pe-4">
          <v-icon class="me-2">mdi-clock-outline</v-icon>
          <h3 class="text-lg">
            {{ new Date(place.location.localtime).getHours() }}:{{
              String(new Date(place.location.localtime).getMinutes()).padStart(
                2,
                "0"
              )
            }}
          </h3>
        </v-col>
      </v-row>
    </v-card-text>

    <!-- show more days & details -->
    <v-card-actions>
      <v-btn
        @click="showMore = !showMore"
        color="orange-lighten-2"
        text="more days & details"
      ></v-btn>
      <v-spacer></v-spacer>
      <v-btn
        :icon="showMore ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="showMore = !showMore"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="showMore">
        <BorderLine />

        <!-- forecast  -->
        <v-row v-for="(day, index) in place.forecast.forecastday" :key="index">
          <v-col>
            <WeatherForecastDay :day="day" :degreeType="model" />
          </v-col>
        </v-row>

        <!-- info -->
        <v-expand-transition>
          <v-card-text
            v-if="showDetail"
            class="position-absolute w-100"
            style="bottom: 0"
          >
            <WeatherInfo
              :place="place"
              @close-info="showDetail = false"
              @remove-place="removePlace(place.id, place.location.name)"
            />
          </v-card-text>
        </v-expand-transition>

        <!-- forecast btn -->
        <v-card-actions class="justify-end mr-1">
          <v-btn @click="showDetail = true" text>
            More Details<v-icon end>mdi-arrow-right</v-icon>
          </v-btn>
        </v-card-actions>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script setup>
import { ref, watch, onMounted, reactive } from "vue";
import BorderLine from "./BorderLine.vue";
import WeatherForecastDay from "./WeatherForecastDay.vue";
import WeatherInfo from "./WeatherInfo.vue";

defineProps({
  place: Object,
});
const showMore = ref(false);
const showDetail = ref(false);

const model = ref(true); // 攝氏華氏切換預設為 C

const emit = defineEmits(["delete-place"]);

const removePlace = (id, name) => {
  emit("delete-place", id, name);
  showDetail.value = false;
  showMore.value = false;
};

watch(showMore, (newValue, oldValue) => {
  if (!newValue) showDetail.value = false;
});
</script>

<style scoped>
.bg-day {
  background-color: #8ef8fc;
  background-image: linear-gradient(62deg, #007df9 0%, #e0c3fc 100%);
}
.bg-night {
  background-image: linear-gradient(
      62deg,
      rgba(10, 42, 74, 0.7) 0%,
      rgba(39, 8, 69, 0.7) 100%
    ),
    url("https://i.gifer.com/CsTv.gif");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
