<template>
  <TransitionTable tag="tbody">
    <tr
      v-for="(row, index) in data"
      :key="row[cKey] || index">
      <td v-if="indexed">
        <slot
          name="index"
          :index="index">
          {{ index + 1 }}
        </slot>
      </td>
      <td
        v-for="(value, key, idx) in row"
        :key="idx">
        <slot
          :row="row"
          :value="value"
          :col="key">
          {{ value }}
        </slot>
      </td>
    </tr>
  </TransitionTable>
</template>

<script>
import TransitionTable from "../transitions/TransitionTable";

export default {
  name: "VTBody",

  components: { TransitionTable },

  props: {
    data: {
      type: [Array, Object],
      required: true
    },

    cKey: {
      type: String,
      required: false,
      default: ""
    },

    indexed: {
      type: Boolean,
      required: false,
      default: false
    }
  }
};
</script>
