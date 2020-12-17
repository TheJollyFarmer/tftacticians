<template>
  <transition-list tag="tbody">
    <tr
      v-for="(row, index) in data"
      :key="row.id || row[cKey] ||index">
      <td
        v-for="(value, ind) in row"
        :key="ind">
        {{ value }}
      </td>
      <slot :row="row.id"/>
    </tr>
  </transition-list>
</template>

<script>
import TransitionList from "../transitions/TransitionList";

export default {
  name: "VTBody",

  components: { TransitionList },

  props: {
    data: {
      type: [Array, Object],
      required: true
    },

    cKey: {
      type: String,
      required: false,
      default: ""
    }
  }
};
</script>
