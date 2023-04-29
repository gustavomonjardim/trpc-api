import { z } from "zod";
import { InputCreateCustomerDto } from "../../../usecase/customer/create/create.customer.dto";
import CreateCustomerUseCase from "../../../usecase/customer/create/create.customer.usecase";
import FindCustomerUseCase from "../../../usecase/customer/find/find.customer.usecase";
import ListCustomerUseCase from "../../../usecase/customer/list/list.customer.usecase";
import { InputUpdateCustomerDto } from "../../../usecase/customer/update/update.customer.dto";
import UpdateCustomerUseCase from "../../../usecase/customer/update/update.customer.usecase";
import CustomerRepository from "../../customer/repository/sequelize/customer.repository";

import { router, publicProcedure } from "../trpc/trpc";

export const customerRouter = router({
  listCustomers: publicProcedure.query(async () => {
    const usecase = new ListCustomerUseCase(new CustomerRepository());
    const output = await usecase.execute({});
    return output;
  }),
  getCustomerById: publicProcedure
    .input((id: unknown) => {
      if (typeof id === "string") return id;
      throw new Error(`Invalid input: ${typeof id}`);
    })
    .query(async (req) => {
      const { input } = req;

      const usecase = new FindCustomerUseCase(new CustomerRepository());
      const output = await usecase.execute({ id: input });

      return output;
    }),
  createCustomer: publicProcedure
    .input(
      z.object({
        full_name: z.string(),
        email: z.string(),
        document_number: z.string(),
        phone: z.string(),
      })
    )
    .mutation(async (req) => {
      const { input } = req;

      const usecase = new CreateCustomerUseCase(new CustomerRepository());
      const customerDto: InputCreateCustomerDto = {
        fullName: input.full_name,
        documentNumber: input.document_number,
        email: input.email,
        phone: input.phone,
      };
      const output = await usecase.execute(customerDto);

      return output;
    }),
  updateCustomer: publicProcedure
    .input(
      z.object({
        id: z.string(),
        full_name: z.string(),
        email: z.string(),
        document_number: z.string(),
        phone: z.string(),
      })
    )
    .mutation(async (req) => {
      const { input } = req;

      const usecase = new UpdateCustomerUseCase(new CustomerRepository());
      const customerDto: InputUpdateCustomerDto = {
        id: input.id,
        fullName: input.full_name,
        documentNumber: input.document_number,
        email: input.email,
        phone: input.phone,
      };
      const output = await usecase.execute(customerDto);

      return output;
    }),
});
