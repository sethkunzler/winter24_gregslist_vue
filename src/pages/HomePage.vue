<template>
  <div class="container">
    <section class="row my-2">
      <div class="col-8 mx-auto text-center">
        <div class="d-flex align-items-center p-3">
          <h1 class="greg-green">Welcome to Gregslist!</h1>
          <router-link :to="{name: 'About'}">
              <img class="img-fluid selectable" src="https://user-images.githubusercontent.com/102513373/208978485-ee3a19b6-ebd8-4745-b0a2-7e509552146c.png" alt="Greg's List Vue" title="Greg's List Vue">
            </router-link>
        </div>
        <div class="">
          <h2>Select a category to begin:</h2> 
          <ul class="navbar-nav">
            <li>
              <router-link :to="{ name: 'About' }" class="btn bold fs-3 text-success lighten-30 selectable text-uppercase">
                About
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'Cars' }" class="btn bold fs-3 text-success lighten-30 selectable text-uppercase">
                Cars
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'Houses' }" class="btn bold fs-3 text-success lighten-30 selectable text-uppercase">
                Houses
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  setup() {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
img {
  height: 40vh;
  border-radius: 16px;
  box-shadow: 2px 2px 3px black;
}
</style>
