import { api } from "@/api/api";
import { useAppStore } from "@/stores/app";
import { AxiosError, type AxiosRequestConfig } from "axios";
import { ref } from "vue";

export function useLazyFetch<T>() {
  const store = useAppStore();

  const data = ref<T | null>(null);
  const loading = ref<boolean>(false);
  const error = ref<Error | AxiosError | null>(null);

  async function doRequest(config: AxiosRequestConfig) {
    loading.value = true;
    try {
      const response = await api.request({
        ...config,
        headers: { authorization: store.token, ...config.headers },
      });

      data.value = response.data;
    } catch (e) {
      if (e instanceof AxiosError) error.value = e;
      if (e instanceof Error) error.value = e;
    } finally {
      loading.value = false;
    }
  }

  return { data, loading, error, doRequest };
}
