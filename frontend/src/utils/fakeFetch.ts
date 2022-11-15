export default function fakeFetch<T>(data: T) {
  return new Promise<typeof data>((resolves, rejects) => {
    setTimeout(() => {
      if (Math.random() < 0.1)
        return rejects(() => {
          throw new Error("");
        });

      return resolves(data);

      resolves;
    }, Math.random() * 500);
  });
}
