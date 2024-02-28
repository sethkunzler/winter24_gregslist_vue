<template>
  <div class="about mx-5 my-2">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1 class="greg-green bold m-3">About Us</h1>
        </div>
      </div>
      <div class="row bg-grey">
        <div class="col-md-6 d-flex align-items-center justify-content-center">
          <router-link :to="{name: 'Home'}">
            <img class="img-fluid selectable" src="https://user-images.githubusercontent.com/102513373/208978485-ee3a19b6-ebd8-4745-b0a2-7e509552146c.png" alt="Greg's List Vue" title="Greg's List Vue">
          </router-link>
        </div>
        <div class="col-md-6">
          <p class="p-3 fs-5">
            <span class="fs-3 greg-green bold">Here at Greg's List</span> (a completely original application) it all started like John Stop turning my Father’s house into a market! sacrifice wrath Jesus Ipsum resurrection pardon veniam angels occaecat lorem Matthew Genesis. Ut in omnipotent, aliquip incense consequat commodo velit baptism ut savior paradise. Advent I saw you while you were still under the fig tree before Philip called you. dolor paradise est, Stop turning my Father’s house into a market! savior laborum ex quis culpa testimony labore. 
            <br><br>King altar cillum Follow me pardon nulla. If I have told you earthly things, and ye believe not, how shall ye believe, if I tell you of heavenly things? For the law was given through Moses; grace and truth came through Jesus Christ. Lorem ipsum altar commodo ad Heaven eu ut. Aliquip in incense omnipotent wrath.
            <br><br>Tribulation laboris adipisicing sunt exercitation, ut paradise duis mollit I saw you while you were still under the fig tree before Philip called you. betrothed qui. Tribulation sint ad deserunt. Paradise Genesis Go therefore and make disciples of all nations., powers elit incididunt savior leaven repentance consectetur betrothed The Word became flesh and made his dwelling among us. deserunt. In proident pardon do perish ut. 
            <br><br>Elit rejoice powers, parable apostle deserunt mollit repentance prophet in betrothed Don’t misunderstand why I have come. I did not come to abolish the law of Moses or the writings of the prophets. No, I came to accomplish their purpose. quis. Genesis labore est, rejoice aute exodus laboris paradise wrath I have spoken to you of earthly things and you do not believe; how then will you believe if I speak of heavenly things? ullamco in.
          </p>
        </div>
      </div>
    </div>
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

<style lang="scss" scoped>
img {
  height: 60vh;
  border-radius: 16px;
  box-shadow: 3px 3px 5px black;
}
.bg-grey {
  background-color: rgba(126, 126, 126, 0.293);
  border-radius: 16px;
}
</style>
