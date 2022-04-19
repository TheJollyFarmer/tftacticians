<template>
  <NavDropdown icon="circle">
    <SetDropdownItem
      v-for="set in sets"
      :key="set.key"
      :set="set"
      @onClick="setSet"/>
  </NavDropdown>
</template>
<script>
import NavDropdown from "@/components/nav/NavDropdown";
import SetDropdownItem from "./SetDropdownItem";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "SetDropdown",

  components: { NavDropdown, SetDropdownItem },

  computed: mapGetters({ sets: "getSets" }),

  methods: {
    ...mapActions(["setActiveSet"]),

    setSet(set) {
      this.$route.name === "Champion"
        ? this.$router.push({ name: "home" }).then(() => this.setActiveSet(set))
        : this.setActiveSet(set);
    }
  }
};
</script>
