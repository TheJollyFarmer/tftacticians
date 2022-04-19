<template>
  <thead>
    <tr>
      <th
        v-for="head in headers"
        :key="head"
        class="is-capitalized">
        {{ head }}
      </th>
    </tr>
  </thead>
</template>

<script>
export default {
  name: "VTHead",

  props: {
    headers: {
      type: Array,
      required: true
    }
  }
};
</script>
