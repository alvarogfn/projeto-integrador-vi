import fakerBr from "faker-br";
import { faker } from "@faker-js/faker";
import { ClientModel } from "../models/Clients";

export async function FakePopulate() {
  faker.setLocale("pt_BR");

  const model = await ClientModel.create({
    name: faker.name.fullName(),
    cpf: fakerBr.br.cpf(),
    address: {
      state: faker.address.state(),
      city: faker.address.city(),
      region: faker.address.direction(),
    },
    birthdate: faker.date.birthdate(),
    credit: faker.finance.amount(),
  });

  await model.save();
}
