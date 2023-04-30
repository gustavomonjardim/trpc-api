import { useEffect } from "react";
import { Button } from "ui";
import { trpc } from "../trpc";

export default function Web() {
  const fetchUser = async () => {
    const customers = await trpc.customers.listCustomers.query();

    console.log(customers);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <h1>Web</h1>
      <Button />
    </div>
  );
}
