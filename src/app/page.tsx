import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOptions } from "./utils/auth";
import LogoutButton from "./componets/LogoutButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div className="p-10">
      <h1>hello from the index page this is public route</h1>
      {session ? (
        <div>
          <h1>you are logged in</h1>
          <LogoutButton />
        </div>
      ) : (
        <div>
          <h1>Please log in to see something special</h1>
          <Button asChild>
            <Link href={"/auth"}>Log in</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
