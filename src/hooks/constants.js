export const manageDispatch = (dispatch, callback, data) => 
  dispatch(
    callback({
      data,
    })
  );
;
