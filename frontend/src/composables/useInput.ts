import { ref, type Ref, unref } from "vue";

export function useInput(element: Ref<HTMLInputElement> | null) {
  const value = ref<string>("");
  const error = ref<string | null>();

  const input = unref(element);

  console.log(input.value);

  return { value, error };
}
