import mongoose from "mongoose";
import moment from "moment";

export interface ClientInterface {
  birthdate: number;
  city: string;
  credit: number;
  createdAt: number;
}

const ClientSchema = new mongoose.Schema<ClientInterface>({
  birthdate: {
    type: Number,
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
});

ClientSchema.set("virtuals", true);
ClientSchema.set("toJSON", { virtuals: true });
ClientSchema.set("toObject", { virtuals: true });

ClientSchema.virtual("age").get(function () {
  const birthdate = moment(this.birthdate);
  return moment(new Date()).subtract(birthdate.year(), "years").year();
});

export const ClientModel = mongoose.model("Clients", ClientSchema);
