import ValidatorInterface from "../../@shared/validator/validator.interface";
import Customer from "../entity/customer";
import { z, ZodError } from "zod";

export default class CustomerZodValidator
  implements ValidatorInterface<Customer>
{
  validate(entity: Customer): void {
    try {
      z.object({
        id: z.string({ required_error: "id is required" }),
        fullName: z.string({ required_error: "fullName is required" }),
        email: z.string({ required_error: "email is required" }),
        documentNumber: z.string({
          required_error: "documentNumber is required",
        }),
        phone: z.string({ required_error: "phone is required" }),
      }).parse(entity);
    } catch (errors) {
      console.log(errors);
    }
  }
}
