class Dataset {
  private _label: string = "";
  private _colors: string[] = [];
  private _values: number[] = [];

  constructor(label: string) {
    this._label = label;
  }

  withValues(field: { color: string; value: number }) {
    this._values.push(field.value);
    this._colors.push(field.color);

    return this;
  }

  get colors() {
    return this._colors;
  }

  get values() {
    return this._values;
  }

  get label() {
    return this._label;
  }

  toObject() {
    return {
      data: this._values,
      label: this._label,
      backgroundColor: this._colors,
    };
  }
}

export abstract class Chart {
  protected type: string = "";

  protected title: string = "";
  protected source: string = "";

  protected axis: { x: string; y: string } = { x: "", y: "" };

  protected height: number = 300;
  protected width: number = 300;

  protected _datasets: Dataset[] = [];
  protected labels: Set<string> = new Set();

  withAxis(axis: { x: string; y: string }) {
    this.axis = axis;

    return this;
  }

  withTitle(title: string) {
    this.title = title;
    return this;
  }

  withSource(source: string) {
    this.source = source;
    return this;
  }

  withLabels(labels: string[] | string) {
    if (Array.isArray(labels)) {
      labels.forEach((label) => this.labels.add(label));
      return this;
    }
    this.labels.add(labels);
    return this;
  }

  newDataset(label: string) {
    const dataset = new Dataset(label);
    this._datasets.push(dataset);
    return dataset;
  }

  getLabels() {
    return this.labels;
  }

  toObject() {
    const object = {
      type: this.type,
      chartData: {
        labels: Array.from(this.labels),
        datasets: this._datasets.map((dataset) => dataset.toObject()),
      },
      title: this.title,
    };
    return object;
  }
}

export class Pie extends Chart {
  protected type: string = "pie";
}

export class Bar extends Chart {
  protected type: string = "bar";

  toObject() {
    const object = {
      type: this.type,
      chartData: {
        labels: Array.from(this.labels),
        datasets: this._datasets.map((dataset) => ({
          data: dataset.values,
          borderColor: dataset.colors,
          backgroundColor: dataset.colors,
          label: dataset.label,
        })),
      },
      title: this.title,
    };

    return object;
  }
}

export class Line extends Chart {
  protected type: string = "line";

  toObject() {
    const object = {
      type: this.type,
      chartData: {
        labels: Array.from(this.labels),
        datasets: this._datasets.map((dataset) => ({
          data: dataset.values,
          borderColor: dataset.colors,
          backgroundColor: dataset.colors,
          label: dataset.label,
        })),
      },
      title: this.title,
    };
    return object;
  }
}

export class Doughnut extends Chart {
  protected type: string = "doughnut";
}

export class Radar extends Chart {
  protected type: string = "radar";

  toObject() {
    const object = {
      type: this.type,
      chartData: {
        labels: Array.from(this.labels),
        datasets: this._datasets.map((dataset) => ({
          data: dataset.values,
          borderColor: dataset.colors,
          backgroundColor: dataset.colors,
          label: dataset.label,
        })),
      },
      title: this.title,
    };
    return object;
  }
}
