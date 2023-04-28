import Customer from "../entity/customer";
import { v4 as uuid } from "uuid";

export default class CustomerFactory {
  public static create({
    id,
    documentNumber,
    email,
    fullName,
    phone,
  }: {
    id?: string;
    fullName: string;
    documentNumber: string;
    email: string;
    phone: string;
  }): Customer {
    return new Customer({
      documentNumber,
      email,
      id: id ?? uuid(),
      fullName,
      phone,
    });
  }
}
