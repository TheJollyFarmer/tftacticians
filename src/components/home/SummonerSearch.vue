<template>
  <VField
    class="summoner-search"
    addons>
    <VSelect
      v-model="region"
      :options="regions"
      icon="globe"/>
    <VInput
      v-model="name"
      type="search"
      icon-right="search"
      autofocus/>
    <VButton @onClick="getSummonerData">
      Click Me!
    </VButton>
  </VField>
</template>

<script>
import regions from "@/constants/regions.json";
import VField from "@/components/utility/VField";
import VInput from "@/components/utility/VInput";
import VSelect from "@/components/utility/VSelect";
import VButton from "@/components/utility/VButton";
import { mapActions, mapState } from "vuex";

export default {
  name: "SummonerSearch",

  components: {
    VButton,
    VField,
    VInput,
    VSelect
  },

  data() {
    return {
      regions
    };
  },

  computed: {
    ...mapState(["summoner"]),

    region: {
      get() {
        return this.summoner.region;
      },

      set(region) {
        this.updateRegion(region);
      }
    },

    name: {
      get() {
        return this.summoner.name;
      },

      set(name) {
        this.updateName(name);
      }
    }
  },

  methods: {
    ...mapActions("summoner", ["updateRegion", "updateName", "getSummoner"]),

    getSummonerData() {
      this.getSummoner().then(
        () => {
          this.$router.push({
            name: "Summoner",
            params: {
              region: this.region,
              name: this.name
            }
          });
        },
        error => {
          console.error(error);
        }
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.summoner-search {
  border-radius: 3px;
  box-shadow: $shadow;
  display: flex;
  margin: 0 auto;
}

::v-deep .control.has-icons-left {
  select {
    background-color: $primary;
    color: $white;
    text-transform: uppercase;
  }

  span {
    color: $white;
  }
}
</style>
