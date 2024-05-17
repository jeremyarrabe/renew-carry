import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <div className="mt-32 flex items-center justify-center">
      <SignIn path="/sign-in" />
    </div>
  );
}
