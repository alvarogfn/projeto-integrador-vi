import { colors } from "./Utils";

class Dataset {
  private label: string;
  private color: string | string[];
  private _values: number[] = [];

  constructor(label: string, color: string | string[]) {
    this.label = label;
    this.color = color;
  }

  get values() {
    return this._values.sort((a, b) => a - b).reverse();
  }

  set values(values: number[]) {
    this._values = values;
  }

  toObject() {
    return {
      data: this.values,
      label: this.label,
      backgroundColor: this.color,
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
  protected labels: string[] = [];

  protected insights: { title: string; content: string }[] = [];

  constructor(labels: string[] = []) {
    this.labels = labels;
  }

  withTitle(title: string) {
    this.title = title;
    return this;
  }

  withSource(source: string) {
    this.source = source;
    return this;
  }

  withValues(label: string, values: number[]) {
    const dataset = new Dataset(label, colors[this._datasets.length]);
    dataset.values = values;

    this._datasets.push(dataset);

    return this;
  }

  withInsight(title: string, content: string) {
    this.insights.push({ title, content });
    return this;
  }

  toObject() {
    return {
      type: this.type,
      chartData: {
        labels: this.labels,
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

  withValues(label: string, values: number[]) {
    const dataset = new Dataset(label, colors);
    dataset.values = values;
    this._datasets.push(dataset);

    return this;
  }
}

export class Bar extends Chart {
  protected type: string = "bar";
}

export class Line extends Chart {
  protected type: string = "line";
}
