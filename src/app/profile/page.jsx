import React from 'react';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/dist/server/api-utils';
import Image from 'next/image';

const Profile = async () => {
  const user = await currentUser();

  return (
    <div className="mt-32 bg-red-300">
      <div>
        <Image alt="profile picture" src={user.imageUrl} width={500} height={500} />
      </div>
    </div>
  );
};

export default Profile;
