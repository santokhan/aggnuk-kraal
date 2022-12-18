import { defineStore } from "pinia";

export const usePageStore = defineStore("page", {
  state: () => {
    return { name: "home", form: 1 };
  },
  actions: {
    increment() {
      this.form++;
    },
    decrement() {
      this.form--;
    },
  },
});
