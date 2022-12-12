import IMask, { type AnyMaskedOptions } from "imask";
import moment from "moment";

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
    mask: Date,
    min: moment().subtract(80, "years").toDate(),
    max: moment().subtract(18, "years").toDate(),
    lazy: false,
  },
};

export default customMasks;
