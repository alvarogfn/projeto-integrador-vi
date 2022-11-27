type param = { [k: string]: number } | number[];
type response = { label: string; value: number };

export class Statistics {
  static average(data: param): number {
    return (
      Object.keys(data).reduce((acc, key) => {
        return acc + data[key];
      }, 0) / Object.keys(data).length
    );
  }

  static biggest(data: param): response {
    let max = -Infinity;
    let item = { label: "", value: 0 };
    for (const key in data) {
      if (data[key] > max) {
        max = data[key];
        item = { label: key, value: max };
      }
    }

    return item;
  }

  static lowest(data: param): response {
    let min = Infinity;
    let item = { label: "", value: 0 };
    for (const key in data) {
      if (data[key] < min) {
        min = data[key];
        item = { label: key, value: min };
      }
    }

    return item;
  }

  static median(data: param): number {
    const values = Object.values(data);

    values.sort(function (a, b) {
      return a - b;
    });

    const half = Math.floor(values.length / 2);

    if (values.length % 2) return values[half];

    return (values[half - 1] + values[half]) / 2.0;
  }

  static absoluteToPercent(object: { [key: string]: number }) {
    const total = Object.entries(object).reduce((acc, [_, value]) => {
      return acc + value;
    }, 0);

    return Object.entries(object).reduce((acc, [key, value]) => {
      acc[key] = +((100 * value) / total).toFixed(2);

      return acc;
    }, {} as { [k: string]: number });
  }
}
