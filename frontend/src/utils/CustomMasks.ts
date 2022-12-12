import IMask, { type AnyMaskedOptions } from "imask";

type masks = { [k: string]: AnyMaskedOptions };

const customMasks: masks = {
  currency: {
    mask: "R$ value",
    blocks: {
      value: {
        mask: IMask.MaskedNumber,
        min: 0,
        from: 0,
        radix: ",",
        scale: 2,
        padFractionalZeros: true,
        thousandsSeparator: ".",
      },
    },
  },
  date: {
    mask: "00/00/0000",
  },
};

export default customMasks;
