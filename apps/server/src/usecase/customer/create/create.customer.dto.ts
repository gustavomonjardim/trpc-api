export interface InputCreateCustomerDto {
  fullName: string;
  email: string;
  documentNumber: string;
  phone: string;
}

export interface OutputCreateCustomerDto {
  id: string;
  fullName: string;
  email: string;
  documentNumber: string;
  phone: string;
}
