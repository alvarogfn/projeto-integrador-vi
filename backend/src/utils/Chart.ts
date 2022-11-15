import { colors } from "./Utils";

export class Chart {
  protected title: string = "";
  protected size: { height: number; width: number } = {
    height: 400,
    width: 400,
  };

  withTitle(title: string) {
    this.title = title;
    return this;
  }

  withSize(size: { height: number; width: number }) {
    this.size = size;
    return this;
  }
}

export class Pie extends Chart {
  protected _values: { value: number; label: string; color?: string }[] = [];

  append(label: string, value: number) {
    const newValue = { label, value };

    this._values.push(newValue);

    return this;
  }

  appendMany(values: { [k: string]: number }) {
    Object.keys(values).forEach((key) => {
      this.append(key, values[key]);
    });
  }

  get values() {
    const sorted = this._values.sort((a, b) => a.value - b.value);

    this._values = sorted.map((item, index) => ({
      ...item,
      color: colors[index],
    }));

    this._values = this._values.reverse();

    return this._values;
  }

  toString() {
    return {
      type: "pie",
      chartData: {
        labels: this.values.map(({ label }) => label),
        datasets: [
          {
            data: this.values.map(({ value }) => value),
            backgroundColor: this.values.map(({ color }) => color),
          },
        ],
      },
      title: this.title,
      ...this.size,
    };
  }
}
