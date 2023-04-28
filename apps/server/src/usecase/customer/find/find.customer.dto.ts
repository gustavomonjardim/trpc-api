export interface InputFindCustomerDto {
  id: string;
}

export interface OutputFindCustomerDto {
  id: string;
  fullName: string;
  email: string;
  documentNumber: string;
  phone: string;
}
