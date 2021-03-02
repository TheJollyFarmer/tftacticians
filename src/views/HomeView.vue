<template>
  <section class="hero is-fullheight-with-navbar is-bold">
    <div class="hero-body">
      <HomeImage
        image="teemo"
        dimension="96"/>
      <HomeImage image="nautilus"/>
      <SummonerSearch/>
    </div>
  </section>
</template>

<script>
import HomeImage from "@/components/home/HomeImage";
import SummonerSearch from "@/components/home/SummonerSearch";

export default {
  name: "Home",

  components: {
    HomeImage,
    SummonerSearch
  }
};
</script>

<style lang="scss" scoped>
.hero-body {
  flex-direction: column;
  justify-content: center;

  .image:last-of-type {
    height: 300px;
  }

  ::v-deep .control.has-icons-left {
    select {
      background-color: $primary;
      color: $white;
    }

    span {
      color: $white;
    }
  }
}
</style>
