import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex h-[calc(100svh-90px)] items-center justify-center">
      <SignUp />
    </div>
  );
}
