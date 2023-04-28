import CustomerRepositoryInterface from "../../../domain/customer/repository/customer-repository.interface";
import {
  InputCreateCustomerDto,
  OutputCreateCustomerDto,
} from "./create.customer.dto";
import CustomerFactory from "../../../domain/customer/factory/customer.factory";

export default class CreateCustomerUseCase {
  private customerRepository: CustomerRepositoryInterface;

  constructor(customerRepository: CustomerRepositoryInterface) {
    this.customerRepository = customerRepository;
  }

  async execute(
    input: InputCreateCustomerDto
  ): Promise<OutputCreateCustomerDto> {
    const customer = CustomerFactory.create({
      documentNumber: input.documentNumber,
      email: input.email,
      fullName: input.fullName,
      phone: input.phone,
    });

    await this.customerRepository.create(customer);

    return {
      id: customer.id,
      fullName: customer.fullName,
      email: customer.email,
      documentNumber: customer.documentNumber,
      phone: customer.phone,
    };
  }
}
