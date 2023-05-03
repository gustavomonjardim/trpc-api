import { trpc } from "../trpc";

export const listCustomers = async () => {
  const data = await trpc.customers.listCustomers.query();
  return data;
};

export const getCustomer = async ({ id }: { id: string }) => {
  const data = await trpc.customers.getCustomerById.query(id);
  return data;
};

export const createCustomer = async (data: {
  fullName: string;
  email: string;
  documentNumber: string;
  phone: string;
}) => {
  const res = await trpc.customers.createCustomer.mutate({
    documentNumber: data.documentNumber,
    email: data.email,
    fullName: data.fullName,
    phone: data.phone,
  });

  return res;
};

export const updateCustomer = async (data: {
  id: string;
  fullName: string;
  email: string;
  documentNumber: string;
  phone: string;
}) => {
  const res = await trpc.customers.updateCustomer.mutate({
    id: data.id,
    documentNumber: data.documentNumber,
    email: data.email,
    fullName: data.fullName,
    phone: data.phone,
  });

  return res;
};
