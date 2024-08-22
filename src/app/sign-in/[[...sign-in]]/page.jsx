import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex h-[100svh] items-center justify-center">
      <SignIn redirectUrl="/" />
    </div>
  );
}
