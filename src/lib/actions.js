'use server';

import { Users, CartItems } from '@/server/models';

export const getUser = async () => {
  const users = await Users.findAll();
  console.log(users);
};

export const createUser = async () => {
  await Users.create({
    firstName: 'jem',
    lastName: 'arrabe',
    email: 'jemArr@gmail.com',
  });
};

export const getUserWithCart = async () => {
  const itemsInCart = await CartItems.findAll({
    where: {
      userId: 1,
    },
  });

  console.log(itemsInCart);
};

// get with fk
// const users = await CartItems.findAll({
//   where: {
//     userId: 2,
//   },
//   include: [
//     {
//       model: Users,
//       attributes: ['firstName', 'lastName'],
//     },
//   ],
// });
