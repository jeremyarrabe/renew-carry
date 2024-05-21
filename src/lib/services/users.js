import { Users } from '@/server/models';

export const getUserCart = async (id) => {};

export const addUserToDb = async (userObj) => {
  console.log(userObj);
  try {
    const checkUser = await Users.findOne({
      where: {
        id: userObj.id,
      },
    });
    if (!checkUser) {
      const addUser = await Users.create({
        id: userObj.id,
        firstName: userObj.first_name,
        lastName: userObj.last_name,
        email: userObj.email_addresses[0].email_address,
      });
      console.log('User not in db');
    } else {
      console.log('User in db');
    }
  } catch (error) {
    console.log(error);
  }
};
