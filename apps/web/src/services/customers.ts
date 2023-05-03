import axios from "axios";

const url = "http://localhost:4000";

export const listCustomers = async () => {
  const res = await axios.get(`${url}/customers`);
  return res.data;
};

export const getCustomer = async ({ id }: { id: string }) => {
  const res = await axios.get(`${url}/customers/${id}`);
  return res.data;
};

export const createCustomer = async (data: {
  fullName: string;
  email: string;
  documentNumber: string;
  phone: string;
}) => {
  const res = await axios.post(`${url}/customers`, {
    full_name: data.fullName,
    document_number: data.documentNumber,
    email: data.email,
    phone: data.phone,
  });

  return res.data;
};

export const updateCustomer = async (data: {
  id: string;
  fullName: string;
  email: string;
  documentNumber: string;
  phone: string;
}) => {
  const res = await axios.put(`${url}/customers/${data.id}`, {
    full_name: data.fullName,
    document_number: data.documentNumber,
    email: data.email,
    phone: data.phone,
  });

  return res.data;
};
