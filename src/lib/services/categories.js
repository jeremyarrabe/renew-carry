import { Categories } from '@/server/models';

export const getCategories = async () => {
  try {
    const categories = await Categories.findAll({ order: [['updatedAt', 'ASC']] });

    return JSON.parse(JSON.stringify(categories));
  } catch (error) {
    console.log(error);
  }
};
