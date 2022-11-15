export interface IChart {
  backgroundColor: string[];
}

export interface IBar extends IChart {
  data: string[];
}
export interface ILine extends IChart {
  data: string[] | { y: string | number; x: string | number };
}

export interface IPie extends IChart {
  data: string[] | { [k: string]: number };
}
