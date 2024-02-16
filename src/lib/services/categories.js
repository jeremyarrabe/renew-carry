import { Categories } from '@/server/models';

export const getCategories = async () => {
  try {
    const categories = await Categories.findAll({ order: [['updatedAt', 'ASC']] });
    return categories;
  } catch (error) {
    console.log(error);
  }
};
