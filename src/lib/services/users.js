import { Users } from '@/server/models';

export const getUserCart = async (id) => {};

export const addUserToDb = async (userObj) => {
  try {
    const checkUser = await Users.findOne({
      where: {
        id: userObj.id,
      },
    });
    if (!checkUser) {
      await Users.create({
        id: userObj.id,
        firstName: userObj.first_name,
        lastName: userObj.last_name,
        email: userObj.email_addresses[0].email_address,
        username: userObj.username,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
