import { Container, Link, Stack } from "@chakra-ui/react";
import React from "react";
import Form, { FormProps } from "../../components/form";
import { GetServerSideProps } from "next";
import { getCustomer, updateCustomer } from "../../services/customers";
import { useRouter } from "next/router";

type Props = {
  id: string;
  fullName: string;
  email: string;
  documentNumber: string;
  phone: string;
};

const NewCustomer = (props: Props) => {
  const router = useRouter();

  const onSubmit = async (data: FormProps) => {
    const res = await updateCustomer({ ...data, id: props.id });
    router.push(`/customers`);
  };

  return (
    <Container padding={24} maxW="1400px">
      <Stack spacing="24px">
        <Form {...props} onSubmit={onSubmit} />
        <Link href="/customers">Voltar</Link>
      </Stack>
    </Container>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const id = ctx.query.id as string;
  const customer = await getCustomer({ id });

  return {
    props: customer,
  };
};

export default NewCustomer;
