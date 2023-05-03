import { Button, Input, Stack } from "@chakra-ui/react";
import { useFormik } from "formik";
import React from "react";

type TextFieldProps = {
  id: string;
  name: string;
  label: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
};

export type FormProps = {
  fullName: string;
  email: string;
  documentNumber: string;
  phone: string;
};

const TextField = ({ label, id, name, onChange, value }: TextFieldProps) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <Input id={id} name={name} onChange={onChange} value={value} />
    </div>
  );
};

const Form = ({
  documentNumber,
  email,
  fullName,
  phone,
  onSubmit,
}: Partial<FormProps> & { onSubmit: (data: FormProps) => void }) => {
  const { submitForm, handleChange, values } = useFormik({
    initialValues: {
      fullName: fullName ?? "",
      email: email ?? "",
      documentNumber: documentNumber ?? "",
      phone: phone ?? "",
    },
    onSubmit: (values) => {
      onSubmit(values);
    },
  });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    submitForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing="24px">
        <TextField
          id="fullName"
          name="fullName"
          label="Full Name"
          onChange={handleChange}
          value={values.fullName}
        />
        <TextField
          id="documentNumber"
          name="documentNumber"
          label="Document Number"
          onChange={handleChange}
          value={values.documentNumber}
        />
        <TextField
          id="email"
          name="email"
          label="E-mail"
          onChange={handleChange}
          value={values.email}
        />
        <TextField
          id="phone"
          name="phone"
          label="Phone"
          onChange={handleChange}
          value={values.phone}
        />
        <Button type="submit">Submit</Button>
      </Stack>
    </form>
  );
};

export default Form;
