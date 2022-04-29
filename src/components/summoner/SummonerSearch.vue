<template>
  <VField class="summoner-search">
    <VInput
      v-model.trim="name"
      autofocus
      @onEnter="getSummonerData">
      <SummonerSearchButton
        :region="region"
        @onClick="toggleModal"/>
    </VInput>
    <VModal>
      <RegionsSection v-model="region"/>
    </VModal>
  </VField>
</template>

<script>
import RegionsSection from "@/components/leaderboard/RegionsSection";
import SummonerSearchButton from "@/components/summoner/SummonerSearchButton";
import VField from "@/components/utility/VField";
import VInput from "@/components/utility/VInput";
import VModal from "@/components/utility/VModal";
import { mapActions, mapState } from "vuex";
import { defineAsyncComponent } from "vue";

const VLiVModal = defineAsyncComponent(() =>
  import("@/components/utility/VModal")
);

export default {
  name: "SummonerSearch",

  components: {
    VModal,
    RegionsSection,
    SummonerSearchButton,
    VField,
    VInput
  },

  data() {
    return {
      name: ""
    };
  },

  computed: {
    ...mapState("summoner", ["form"]),

    region: {
      get() {
        return this.form.region;
      },

      set(region) {
        this.updateRegion(region);
      }
    }
  },

  watch: {
    region() {
      this.toggleModal();
    }
  },

  methods: {
    ...mapActions({
      toggleModal: "toggleModal",
      updateName: "summoner/updateName",
      updateRegion: "summoner/updateRegion",
      getSummoner: "summoner/getSummonerProfile",
      setError: "setError"
    }),

    getSummonerData() {
      let msg = "We can not find the summoner you are looking for.";

      if (this.name && this.name !== this.$route.params.name) {
        this.getSummoner(this.name)
          .then(() => this.goToSummonerView())
          .then(() => (this.name = ""))
          .catch(() => this.setError(msg));
      }
    },

    goToSummonerView() {
      this.$router.push({
        name: "summoner",
        params: {
          region: this.region,
          name: this.name
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.summoner-search {
  border-radius: 3px;
  box-shadow: $shadow;
  margin: 0 auto;
  width: 300px;

  :deep(.input::-webkit-search-cancel-button) {
    right: 4.5em;
  }
}
</style>
