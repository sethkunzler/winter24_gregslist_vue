<template>
  <div class="container">
    <section class="row">
      <div class="col-10 mx-auto my-2 d-flex justify-content-between align-items-center">
        <h1 class="display-5 bold greg-green">Cars</h1>
        <h3 >Choose a Car!</h3>
      </div>

      <div class="col-12">
        <CarForm />
      </div>
    </section>

    <section class="row">
      <div v-for="car in cars" :key="car.id" class="col-md-4 mb-3 car-card">
        <!-- <img :src="car.imgUrl" class="img-fluid" :alt="car.make + ' ' + car.model" role="button">
        <div class="car-title">
          <p class="fs-4 mb-1 ms-1">{{ car.make }} {{ car.model }}</p>
        </div> -->
        <CarCard :carProp="car" />
      </div>
    </section>
  </div>
</template>


<script>
import { computed, onMounted } from 'vue';
import Pop from '../utils/Pop.js';
import { carsService } from '../services/CarsService.js'
import { AppState } from '../AppState.js'
import CarCard from '../components/CarCard.vue';
import { logger } from '../utils/Logger.js';
export default {
  setup() {
    async function getCars() {
      try {
        await carsService.getCars();
      }
      catch (error) {
        Pop.error(error);
      }
    }
    // NOTE when the page loads!
    onMounted(() => {
      // console.log('Page is mounted!');
      getCars();
    });
    return {
      cars: computed(() => AppState.cars),
    };
  },
  components: { CarCard }
}
</script>


<style lang="scss" scoped>
.car-card {
  position: relative;
}
</style>