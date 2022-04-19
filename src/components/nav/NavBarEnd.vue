<template>
  <nav class="navbar-end">
    <div class="navbar-item">
      <SummonerSearch/>
    </div>
    <ThemeSwitch/>
    <NavLink
      v-for="(link, index) in links"
      :key="index"
      :icon="link.icon"
      :link="link.path"/>
    <SetDropdown/>
  </nav>
</template>

<script>
import links from "@/constants/links";
import NavLink from "./NavLink";
import SetDropdown from "@/components/nav/SetDropdown";
import SummonerSearch from "@/components/summoner/SummonerSearch";
import ThemeSwitch from "@/components/ThemeSwitch";

export default {
  name: "NavBarEnd",

  components: {
    NavLink,
    SetDropdown,
    SummonerSearch,
    ThemeSwitch
  },

  data() {
    return {
      links
    };
  }
};
</script>

<style scoped>
.switch {
  margin: 0 0.75em;
}
</style>
