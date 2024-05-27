import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <div className="mt-32 flex items-center justify-center">
      <SignUp />
    </div>
  );
}
