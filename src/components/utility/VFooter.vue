<template>
  <keep-alive>
    <footer class="footer">
      <VTop/>
      <div class="container has-text-centered">
        <FooterLinks/>
        <p>
          TFT isn't endorsed by Riot Games and doesn't reflect the views or
          opinions of Riot Games or anyone officially involved in producing or
          managing Riot Games properties. Riot Games, and all associated
          properties are trademarks or registered trademarks of Riot Games, Inc.
        </p>
        <VCopyright/>
      </div>
    </footer>
  </keep-alive>
</template>

<script>
import FooterLinks from "@/components/footer/FooterLinks";
import VCopyright from "@/components/utility/VCopyright";
import VTop from "@/components/utility/VTop";

export default {
  name: "VFooter",

  components: {
    FooterLinks,
    VCopyright,
    VTop
  },

  methods: {
    toTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: var(--nav);
  bottom: 0;
  color: $white-dark;
  font-size: 0.9em;
  height: 11rem;
  padding: 2.5rem 2rem;
  position: absolute;
  transition-duration: 0.5s;
  transition-property: background-color, color;
  transition-timing-function: ease;
  width: 100%;

  p {
    font-size: 0.85em;

    &:first-of-type {
      width: 50%;
      margin: 0.75rem auto;
    }
  }
}
</style>
