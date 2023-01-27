<template>
  <div class="component-slider grid">
    <Carousel
      :value="slidesMock"
      :numVisible="1"
      :numScroll="1"
      :circular="true"
      :autoplayInterval="sliderInterval"
      :showNavigators="false"
      indicatorsContentClass="indicators"
    >
      <template #item="slotProps">
        <div
          class="p-8 bg-no-repeat bg-cover"
          v-bind:style="{
            backgroundImage: `url(/public/images/slider/${slotProps.data.image})`,
          }"
        >
          <div class="relative flex align-items-center w-4">
            <div>
              <h2 class="mb-4 text-6xl text-white">
                {{ slotProps.data.title }}
              </h2>
              <p class="text-white mb-4 text-xl">
                {{ slotProps.data.description }}
              </p>
              <button
                class="text-white border-round-3xl p-3 pl-8 pr-8 text-2xl bg-blue-600"
              >
                {{ slotProps.data.buttonText }}
              </button>
            </div>
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script async setup lang="ts">
import { slidesMock } from "../mocks/slides";
const sliderInterval = 5000;
</script>

<style lang="scss" scoped></style>