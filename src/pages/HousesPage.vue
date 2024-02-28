<template>
  <div class="container">
    <section class="row">
      <div class="col-12 my-2 greg-green">
        <h1 class="display-5 bold">Houses</h1>
      </div>

      <!-- <div class="col-12">
        <HouseForm />
      </div> -->
    </section>

    <section class="row">
      <!-- <div v-for="house in houses" :key="house.id" class="col-md-4 mb-3 house-card">
        <img :src="house.imgUrl" class="img-fluid" :alt="house.make + ' ' + house.model" role="button">
        <div class="house-title">
          <p class="fs-4 mb-1 ms-1">{{ house.name }} {{ house.price }}</p>
        </div>
        <HouseCard :houseProp="house" />
      </div> -->
    </section>
  </div>
</template>
<script>
import { onMounted } from "vue";
import { housesService } from '../services/HousesService.js';
import Pop from "../utils/Pop.js";

  export default {
    setup() {
      async function getHouses() {
        try {
          await housesService.getHouses();
        } catch (error) {
          Pop.error(error)
        }
      }
      onMounted(() => {
        console.log('Home Page Mounted')
        getHouses();
      });
    }
  }
</script>

<style></style>