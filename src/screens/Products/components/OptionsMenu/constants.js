export const generateDropdownOptions = (categories) =>
  categories?.map((categorie, i) => {
    return { key: i, text: categorie, value: categorie };
  });
