<template>
  <Popover/>
  <CookieNotice/>
  <ErrorNotification @close="removeError"/>
</template>

<script>
import CookieNotice from "@/components/CookieNotice";
import ErrorNotification from "@/components/ErrorNotification";
import Popover from "@/components/Popover";
import { mapActions } from "vuex";

export default {
  name: "Globals",

  components: {
    CookieNotice,
    ErrorNotification,
    Popover
  },

  methods: mapActions(["removeError"])
};
</script>
