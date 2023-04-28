import Customer from "../../../../domain/customer/entity/customer";
import CustomerRepositoryInterface from "../../../../domain/customer/repository/customer-repository.interface";
import CustomerModel from "./customer.model";

export default class CustomerRepository implements CustomerRepositoryInterface {
  async create(entity: Customer): Promise<void> {
    await CustomerModel.create({
      id: entity.id,
      full_name: entity.fullName,
      email: entity.email,
      document_number: entity.documentNumber,
      phone: entity.phone,
    });
  }

  async update(entity: Customer): Promise<void> {
    await CustomerModel.update(
      {
        id: entity.id,
        full_name: entity.fullName,
        email: entity.email,
        document_number: entity.documentNumber,
        phone: entity.phone,
      },
      {
        where: {
          id: entity.id,
        },
      }
    );
  }

  async find(id: string): Promise<Customer> {
    let customerModel;
    try {
      customerModel = await CustomerModel.findOne({
        where: {
          id,
        },
        rejectOnEmpty: true,
      });
    } catch (error) {
      throw new Error("Customer not found");
    }

    const customer = new Customer({
      id,
      documentNumber: customerModel.document_number,
      email: customerModel.email,
      fullName: customerModel.full_name,
      phone: customerModel.phone,
    });
    return customer;
  }

  async findAll(): Promise<Customer[]> {
    const customerModels = await CustomerModel.findAll();

    const customers = customerModels.map((customerModel) => {
      let customer = new Customer({
        id: customerModel.id,
        documentNumber: customerModel.document_number,
        email: customerModel.email,
        fullName: customerModel.full_name,
        phone: customerModel.phone,
      });
      return customer;
    });

    return customers;
  }
}
