import { defineStore } from "pinia";

export const useFormDataStore = defineStore("formdata", {
  state: () => ({
    Q1: "",
    Q2: "",
    Q3: "",
    Q4: "",
    Q5: "",
    Q6: "",
    Q7: "",
    Q8: "",
    Q9: "",
    Q10: "",
    Email: "",
  }),
});
