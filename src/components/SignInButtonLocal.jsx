import { SignInButton } from '@clerk/nextjs';

export default function Home() {
  return (
    <div>
      <SignInButton>
        <button>Sign in with Clerk</button>
      </SignInButton>
    </div>
  );
}
