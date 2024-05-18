import React from 'react';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/dist/server/api-utils';
import Image from 'next/image';

const Profile = async () => {
  const user = await currentUser();

  return (
    <div className="mt-28 flex items-center justify-center flex-col">
      <div className="relative w-[100px] h-[100px] flex   ">
        <Image alt="profile picture" src={user.imageUrl} fill className="rounded-full" />
      </div>
      <p className="mt-8">{`${user.firstName} ${user.lastName}`}</p>
      <form>
        <input type="text" placeholder="address" />
      </form>
    </div>
  );
};

export default Profile;
