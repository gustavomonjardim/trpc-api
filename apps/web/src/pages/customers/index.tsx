import {
  Box,
  Button,
  Flex,
  Link,
  Spacer,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Container } from "@chakra-ui/react";
import { trpc } from "../../trpc";
import NextLink from "next/link";
import { GetServerSideProps } from "next";
import { listCustomers } from "../../services/customers";

interface Customer {
  id: string;
  fullName: string;
  email: string;
  documentNumber: string;
  phone: string;
}

interface Props {
  customers: Customer[];
}

export default function Web({ customers }: Props) {
  return (
    <Container padding={24} maxW="1400px">
      <Stack spacing="24px">
        <Flex>
          <Spacer />
          <Box p="4">
            <NextLink href="/customers/new" legacyBehavior passHref>
              <Link>Adicionar</Link>
            </NextLink>
          </Box>
        </Flex>

        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Full Name</Th>
                <Th>Email</Th>
                <Th>Document Number</Th>
                <Th>Phone</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {customers.map((customer) => (
                <Tr key={customer.id}>
                  <Td>{customer.id}</Td>
                  <Td>{customer.fullName}</Td>
                  <Td>{customer.email}</Td>
                  <Td>{customer.documentNumber}</Td>
                  <Td>{customer.phone}</Td>
                  <Td>
                    <NextLink
                      href={`/customers/${customer.id}`}
                      legacyBehavior
                      passHref
                    >
                      <Link aria-label={`Editar ${customer.fullName}`}>
                        Editar
                      </Link>
                    </NextLink>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Stack>
    </Container>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const data = await listCustomers();

  return { props: data };
};
