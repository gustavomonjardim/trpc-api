import CustomerRepositoryInterface from "../../../domain/customer/repository/customer-repository.interface";
import {
  InputUpdateCustomerDto,
  OutputUpdateCustomerDto,
} from "./update.customer.dto";
import CustomerFactory from "../../../domain/customer/factory/customer.factory";

export default class UpdateCustomerUseCase {
  private customerRepository: CustomerRepositoryInterface;

  constructor(customerRepository: CustomerRepositoryInterface) {
    this.customerRepository = customerRepository;
  }

  async execute(
    input: InputUpdateCustomerDto
  ): Promise<OutputUpdateCustomerDto> {
    const customer = CustomerFactory.create({
      id: input.id,
      documentNumber: input.documentNumber,
      email: input.email,
      fullName: input.fullName,
      phone: input.phone,
    });

    await this.customerRepository.update(customer);

    return {
      id: customer.id,
      fullName: customer.fullName,
      email: customer.email,
      documentNumber: customer.documentNumber,
      phone: customer.phone,
    };
  }
}
