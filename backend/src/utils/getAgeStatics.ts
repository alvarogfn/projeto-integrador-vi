import { ClientModel } from "../models/Clients";

export async function getAgeStatics() {
  const clients = await ClientModel.find();
}
