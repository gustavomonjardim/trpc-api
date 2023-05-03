import { GetServerSideProps } from "next/types";
import React from "react";

const Index = () => {
  return undefined;
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/customers",
      permanent: false,
    },
  };
};

export default Index;
