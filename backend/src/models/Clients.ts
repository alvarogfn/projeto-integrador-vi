import mongoose from "mongoose";
import moment from "moment";

interface ClientInterface {
  name: string;
  cpf: string;
  birthdate: Date;
  address: {
    state: string;
    city: string;
    region: string;
  };
  credit: number;
  age: number;
}

const ClientSchema = new mongoose.Schema<ClientInterface>(
  {
    name: {
      type: String,
      required: true,
    },
    cpf: {
      type: String,
      required: true,
    },
    birthdate: {
      type: Date,
      required: true,
    },
    address: {
      state: String,
      city: String,
      region: String,
    },
    credit: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    methods: {
      groupBy<U extends keyof ClientInterface>(k: U) {
        return mongoose.model("Clients").find();
      },
    },
  }
);

ClientSchema.set("virtuals", true);
ClientSchema.set("toJSON", { virtuals: true });
ClientSchema.set("toObject", { virtuals: true });

ClientSchema.virtual("age").get(function () {
  const birthdate = moment(this.birthdate);
  return moment(new Date()).subtract(birthdate.year(), "years").year();
});

export const ClientModel = mongoose.model("Clients", ClientSchema);
