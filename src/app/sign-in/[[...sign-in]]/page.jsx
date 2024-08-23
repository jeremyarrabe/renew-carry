import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex h-[calc(100svh-90px)] items-center justify-center">
      <SignIn redirectUrl="/" />
    </div>
  );
}
