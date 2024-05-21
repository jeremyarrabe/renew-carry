import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="mt-32 flex items-center justify-center">
      <SignIn path="/sign-in">Test1</SignIn>
    </div>
  );
}
