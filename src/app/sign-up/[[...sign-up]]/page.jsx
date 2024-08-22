import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex h-[100svh] items-center justify-center">
      <SignUp />
    </div>
  );
}
