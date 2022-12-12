import { type Ref, ref, unref } from "vue";
import { useEventListener } from "./useEventListener";

export function useMedia(query: Ref<string> | string) {
  const mediaQuery = window.matchMedia(unref(query));
  const matches = ref(mediaQuery.matches);
  useEventListener(mediaQuery, "change", (event) => {
    matches.value = (event as MediaQueryListEvent).matches;
  });
  return matches;
}
