'use server';

export async function search(formData) {
  const rawFormData = {
    searchString: formData.get('search'),
  };

  console.log(`you search for ${rawFormData.searchString}`);
}
