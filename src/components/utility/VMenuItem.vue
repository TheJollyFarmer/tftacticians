<template>
  <RouterLink
    v-slot="{ isExactActive }"
    :to="link"
    custom>
    <li :class="['menu-item', isActive(isExactActive)]">
      <a
        class="layer"
        @click="clickEvent">
        {{ option }}
        <VRotate
          v-if="hasList"
          :rotate="expanded"/>
      </a>
      <TransitionExpand>
        <ul
          v-if="hasList"
          v-show="expanded"
          @click.stop>
          <slot/>
        </ul>
      </TransitionExpand>
    </li>
  </RouterLink>
</template>

<script>
import TransitionExpand from "@/components/transitions/TransitionExpand";
import VRotate from "@/components/utility/VRotate";

export default {
  name: "VMenuItem",
  components: { TransitionExpand, VRotate },

  props: {
    link: {
      type: String,
      required: true
    },

    label: {
      type: String,
      required: false,
      default: ""
    },

    hasList: {
      type: Boolean,
      required: false,
      default: false
    },

    isExpanded: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  data() {
    return {
      expanded: this.isExpanded
    };
  },

  computed: {
    option() {
      return this.label ? this.label : this.link;
    }
  },

  methods: {
    clickEvent() {
      this.hasList ? this.toggleList() : this.$router.push(this.link);
    },

    toggleList() {
      this.expanded = !this.expanded;
    },

    isActive(isExactActive) {
      return { "is-active": this.expanded || isExactActive };
    }
  }
};
</script>
