export interface InputListCustomerDto {}

export interface OutputListCustomerDto {
  customers: {
    id: string;
    fullName: string;
    email: string;
    documentNumber: string;
    phone: string;
  }[];
}
