import mongoose, { ObjectId, Schema } from "mongoose";
import moment from "moment";

export interface ClientInterface {
  city: string;
  birthdate: number;
  credit: number;
  sex: string;
  createdAt: number;
  createdBy: ObjectId;
  preferences: number[];
  age: number;
}

const ClientSchema = new mongoose.Schema<ClientInterface>({
  birthdate: {
    type: Number,
    required: true,
  },
  sex: {
    type: String,
    enum: ["F", "M"],
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  credit: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Number,
    required: true,
    default: Date.now(),
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  preferences: {
    type: [Number],
    enum: [1, 2, 3, 4],
    default: [],
  },
});

ClientSchema.set("virtuals", true);
ClientSchema.set("toJSON", { virtuals: true });
ClientSchema.set("toObject", { virtuals: true });

ClientSchema.virtual("age").get(function () {
  const birthdate = moment(this.birthdate);
  return moment(new Date()).subtract(birthdate.year(), "years").year();
});

ClientSchema.virtual("credit_preferences").get(function () {
  return this.preferences.reduce((acc, item) => {
    if (item === 1) acc.push("Crédito");
    if (item === 2) acc.push("Empréstimo");
    if (item === 3) acc.push("Financiamento");
    if (item === 4) acc.push("Consórcio");

    return acc;
  }, []);
});

export const ClientModel = mongoose.model("Clients", ClientSchema);
