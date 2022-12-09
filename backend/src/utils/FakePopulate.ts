import fakerBr from "faker-br";
import { faker } from "@faker-js/faker";
import { ClientModel } from "../models/Clients";

const cidades = ["Unai", "Paracatu", "Vazante", "Buritis", "Arinos"];

function random<T>(arr: T[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export async function FakePopulate() {
  faker.setLocale("pt_BR");

  const model = await ClientModel.create({
    name: faker.name.fullName(),
    cpf: fakerBr.br.cpf(),
    city: random(cidades),
    birthdate: faker.date.birthdate(),
    credit: faker.finance.amount(0, 12000, 0),
  });

  await model.save();
}
