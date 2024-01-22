"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignInForm() {
  const [email, setEmail] = useState<null | string>(null);
  const SignInWithEmail = async () => {
    const signInResult = await signIn("email", {
      email: email,
      callbackUrl: `${window.location.origin}`,
      redirect: false,
    });

    if (!signInResult?.ok) {
      return toast({
        title: "well this did not work...",
        description: "something went wrong, please try agin",
        variant: "destructive",
      });
    }
    return toast({
      title: "Check your email",
      description: "A magic link has been sent to you",
    });
  };
  return (
    <form action={SignInWithEmail}>
      <div className="flex gap-2 flex-col">
        <Label>Email</Label>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="email"
          placeholder="name@example.com"
        />
      </div>
      <Button type="submit" className="mt-4 w-full">
        Log in with email
      </Button>
    </form>
  );
}
