const SET_SORT_BY = 'SET_SORT_BY';
const SET_CATEGORY = 'SET_CATEGORY';

export const setSortBy = (name) => ({
  type: SET_SORT_BY,
  payload: name,
});

export const setCategory = (categoryIndex) => {
  return {
    type: SET_CATEGORY,
    payload: categoryIndex,
  };
};
