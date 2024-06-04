import { UserProfile } from '@clerk/nextjs';

const UserProfilePage = () => (
  <div className="mt-24 mb-12 flex justify-center">
    <UserProfile path="/user-profile" />
  </div>
);
export default UserProfilePage;
