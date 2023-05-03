import { InputCreateCustomerDto } from "./../../../usecase/customer/create/create.customer.dto";
import express, { Request, Response } from "express";
import CreateCustomerUseCase from "../../../usecase/customer/create/create.customer.usecase";
import ListCustomerUseCase from "../../../usecase/customer/list/list.customer.usecase";
import CustomerRepository from "../../customer/repository/sequelize/customer.repository";
import FindCustomerUseCase from "../../../usecase/customer/find/find.customer.usecase";
import UpdateCustomerUseCase from "../../../usecase/customer/update/update.customer.usecase";
import { InputUpdateCustomerDto } from "../../../usecase/customer/update/update.customer.dto";

export const customerRoute = express.Router();

customerRoute.post("/", async (req: Request, res: Response) => {
  try {
    const usecase = new CreateCustomerUseCase(new CustomerRepository());
    const customerDto: InputCreateCustomerDto = {
      fullName: req.body.fullName,
      documentNumber: req.body.documentNumber,
      email: req.body.email,
      phone: req.body.phone,
    };
    const output = await usecase.execute(customerDto);
    res.send(output);
  } catch (_err) {
    const err = _err as Error;
    res.status(500).send(err.message);
  }
});

customerRoute.get("/", async (req: Request, res: Response) => {
  const usecase = new ListCustomerUseCase(new CustomerRepository());
  const output = await usecase.execute({});

  res.send(output);
});

customerRoute.get("/:id", async (req: Request, res: Response) => {
  const usecase = new FindCustomerUseCase(new CustomerRepository());
  const output = await usecase.execute({ id: req.params.id as string });

  res.send(output);
});

customerRoute.put("/:id", async (req: Request, res: Response) => {
  const usecase = new UpdateCustomerUseCase(new CustomerRepository());
  try {
    const customerDto: InputUpdateCustomerDto = {
      id: req.params.id,
      fullName: req.body.fullName,
      documentNumber: req.body.documentNumber,
      email: req.body.email,
      phone: req.body.phone,
    };
    const output = await usecase.execute(customerDto);
    res.send(output);
  } catch (err) {
    res.status(500).send(err);
  }
});
