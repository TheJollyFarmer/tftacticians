<template>
  <div :class="['cookie-notice layer', { 'is-active': display }]">
    <span>
      <VFavicon icon="exclamation"/> This website uses cookies to ensure you get
      the best possible experience on our website. Find out more on &nbsp;
      <RouterLink :to="{ name: 'policy' }">
        how use we cookies.
      </RouterLink>
    </span>
    <VButton @click="acceptPolicy()">
      Understood, captain!
    </VButton>
  </div>
</template>

<script>
import api from "@/api";
import VButton from "@/components/utility/VButton";
import VFavicon from "@/components/utility/VFavicon";

export default {
  name: "CookieNotice",

  components: { VButton, VFavicon },

  data() {
    return {
      display: false
    };
  },

  mounted() {
    if (!api.getItem("local", "cookie-policy")) {
      this.display = true;
    }
  },

  methods: {
    acceptPolicy() {
      api.setItem("local", "cookie-policy", true);

      this.display = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.cookie-notice {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  transform: translateY(100%);
  transition-property: background-color, color, transform;

  &.is-active {
    transform: translateY(0);
  }

  span {
    align-items: center;
    display: flex;

    .icon {
      font-size: 2rem;
      margin-right: $spacing-smallest;
    }
  }

  a {
    color: var(--primary);
  }
}
</style>
