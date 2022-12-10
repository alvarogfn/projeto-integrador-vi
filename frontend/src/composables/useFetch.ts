import { api } from "@/api/api";
import { useAppStore } from "@/stores/app";
import type { AxiosError, AxiosRequestConfig } from "axios";
import { ref, shallowRef } from "vue";

export function useFetch<T>(config: AxiosRequestConfig) {
  const store = useAppStore();

  const data = shallowRef<T | null>(null);
  const loading = ref<boolean>(false);
  const error = ref<Error | AxiosError | null>(null);

  async function refetch() {
    loading.value = true;
    try {
      const response = await api.request<T>({
        ...config,
        headers: { authorization: store.token, ...config.headers },
      });

      data.value = response.data;
    } catch (e) {
      error.value = e as unknown as AxiosError;
    } finally {
      loading.value = false;
    }
  }

  refetch();

  return { data, loading, error, refetch };
}
