export const manageDispatch = (dispatch, callback, data) =>
  dispatch(
    callback({
      data,
    })
  );
export const sortProducts = (products, key, order) =>
  products.sort((a, b) => {
    const { x, y } = order ? { x: a, y: b } : { x: b, y: a };
    return x[key] > y[key] ? 1 : -1;
  });
