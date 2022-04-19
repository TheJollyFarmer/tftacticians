<template>
  <section class="hero is-fullheight-with-navbar is-bold">
    <div class="hero-body is-justify-content-center">
      <div class="hero-content">
        <p>
          404
          <span>NOT FOUND</span>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default { name: "NotFoundView" };
</script>

<style lang="scss" scoped>
p {
  font-size: 1.5em;

  span {
    border-left: 2px solid var(--primary);
    padding-left: $spacing-small;
  }
}
</style>
