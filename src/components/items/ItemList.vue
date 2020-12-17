<template>
  <div class="items">
    <TransitionList>
      <Item
        v-for="item in items"
        :key="item.id"
        :item="item"/>
    </TransitionList>
  </div>
</template>

<script>
import Item from "@/components/items/Item";
import TransitionList from "@/components/transitions/TransitionList";

export default {
  name: "ItemList",

  components: { TransitionList, Item },

  props: {
    items: {
      type: Array,
      required: true
    }
  }
};
</script>
