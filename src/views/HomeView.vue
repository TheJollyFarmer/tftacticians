<template>
  <section class="hero is-fullheight-with-navbar is-bold">
    <div class="hero-body">
      <div class="hero-content">
        <HomeImage
          image="teemo"
          dimension="96"/>
        <HomeImage image="nautilus"/>
        <SummonerSearch/>
        <h1>Welcome, to <span>TFTacticians</span></h1>
        <h2>
          Search for a player, or explore the rest of the site to learn 
          extensively about the Riot game, Teamfight Tactics.
        </h2>
      </div>
    </div>
  </section>
</template>

<script>
import HomeImage from "@/components/home/HomeImage";
import SummonerSearch from "@/components/summoner/SummonerSearch";

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
  background-blend-mode: luminosity;
  position: relative;

  .hero-content {
    position: relative;

    h1 {
      font-size: 3em;
      margin-top: 1em;

      span {
        color: var(--primary);
      }
    }

    h2 {
      font-size: 1.1em;
      text-align: center;
      font-weight: normal !important;
      width: 550px;
    }

    > :deep(.image):first-of-type {
      position: absolute;
      top: -13%;
      left: 40%;
    }

    > :deep(.image):last-of-type {
      height: 300px;
      margin: auto;
    }
  }
}
</style>
