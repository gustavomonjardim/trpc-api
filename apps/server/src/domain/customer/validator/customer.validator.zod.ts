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
    } catch (_errors) {
      const errors = _errors as ZodError;

      const initialObj: Record<string, string> = {};
      const errorsObj = errors.issues.reduce((obj, error) => {
        if (error.path?.[0] && !obj[error.path[0]]) {
          const newObj = { ...obj, [error.path[0]]: error.message };
          return newObj;
        }
        return obj;
      }, initialObj);

      throw new Error(JSON.stringify(errorsObj));
    }
  }
}
