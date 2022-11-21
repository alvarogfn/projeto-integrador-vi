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

  toObject() {
    return {
      data: this._values.sort((a, b) => a - b).reverse(),
      label: this._label,
      backgroundColor: this._colors,
    };
  }
}

export abstract class Chart {
  protected type: string = "";

  protected title: string = "";
  protected source: string = "";

  protected height: number = 300;
  protected width: number = 300;

  protected _datasets: Dataset[] = [];
  protected labels: Set<string> = new Set();

  protected insights: { title: string; content: string }[] = [];

  withTitle(title: string) {
    this.title = title;
    return this;
  }

  withSource(source: string) {
    this.source = source;
    return this;
  }

  withLabels(labels: string[]) {
    labels.forEach((label) => this.labels.add(label));
    return this;
  }

  newDataset(label: string) {
    const dataset = new Dataset(label);
    this._datasets.push(dataset);
    return dataset;
  }

  withInsight(title: string, content: string) {
    this.insights.push({ title, content });
    return this;
  }

  toObject() {
    return {
      type: this.type,
      chartData: {
        labels: Array.from(this.labels).sort(),
        datasets: this._datasets.map((dataset) => dataset.toObject()),
      },
      insights: this.insights,
      title: this.title,
      source: this.source,
    };
  }
}

export class Pie extends Chart {
  protected type: string = "pie";
}

export class Bar extends Chart {
  protected type: string = "bar";
}

export class Line extends Chart {
  protected type: string = "line";
}
