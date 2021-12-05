export const getPages = (data) => {
  const range = [];
  const num = Math.ceil(data?.length / 10);
  for (let i = 1; i <= num; i++) {
    range.push(i);
  }
  return range;
};
