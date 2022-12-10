import { defineStore } from "pinia";

interface State {
  username: string | null;
  name: string | null;
  token: string | null;
}

export const useAppStore = defineStore("app", {
  state: (): State => ({
    username: null,
    token: null,
    name: null,
  }),
  getters: {
    isAuth(): boolean {
      return !!this.token || !!this.username || !!this.name;
    },
  },
});
