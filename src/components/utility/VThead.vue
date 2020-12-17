<template>
  <thead>
    <tr>
      <th
        v-for="head in headers"
        :key="head">
        {{ head | capitalise }}
      </th>
    </tr>
  </thead>
</template>

<script>
import filters from "@/utils/filters";

export default {
  name: "VTHead",

  filters: {
    capitalise: filters.capitalise
  },

  props: {
    headers: {
      type: Array,
      required: true
    }
  }
};
</script>
