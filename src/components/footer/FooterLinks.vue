<template>
  <div class="links">
    <FooterLink
      v-for="link in links"
      :key="link.icon"
      :link="link"/>
  </div>
</template>

<script>
import links from "@/constants/links.json";
import FooterLink from "@/components/footer/FooterLink";

export default {
  name: "FooterLinks",

  components: { FooterLink },

  data() {
    return {
      links: [
        ...links,
        ...[
          {
            path: "",
            href: "mailto:mattwillcooke@gmail.com",
            icon: "envelope"
          },
          {
            path: "policy",
            icon: "user-shield"
          }
        ]
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.links {
  display: flex;
  font-size: 1rem;
  justify-content: space-evenly;
  margin: auto;
  transition: all $hover-in;
  width: 400px;
}
</style>
