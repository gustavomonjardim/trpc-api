import { useEffect } from "react";
import { Button } from "ui";
import { trpc } from "../trpc";

export default function Web() {
  const fetchUser = async () => {
    const user = await trpc.user.getUserById.query("0");

    console.log(user);
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
