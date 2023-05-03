import { Button, Container, Link, Stack } from "@chakra-ui/react";
import { useFormik } from "formik";
import React from "react";
import Form, { FormProps } from "../../components/form";
import { createCustomer } from "../../services/customers";
import { useRouter } from "next/router";

const NewCustomer = () => {
  const router = useRouter();

  const onSubmit = async (data: FormProps) => {
    const res = await createCustomer(data);
    router.push(`/customers`);
  };

  return (
    <Container padding={24} maxW="1400px">
      <Stack spacing="24px">
        <Form onSubmit={onSubmit} />
        <Link href="/customers">Voltar</Link>
      </Stack>
    </Container>
  );
};

export default NewCustomer;
