import getData from "../dummy_data";

const SEARCH_SUCCESS = "search/SEARCH_SUCCESS";
const SEARCH_FAILURE = "search/SEARCH_FAILURE";
const SORT = "filter/SORT";

export const searchSuccess = (results) => ({
  type: SEARCH_SUCCESS,
  payload: { results },
});

export const searchFailure = () => ({
  type: SEARCH_FAILURE,
});

export const sortDisplay = (results) => ({
  type: SORT,
  payload: { results },
});

const initialState = {
  results: getData(),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_SUCCESS:
    case SORT:
      return {
        ...state,
        results: action.payload.results,
      };
    case SEARCH_FAILURE:
      return {
        ...state,
        results: [],
      };
    default:
      return state;
  }
};

export default reducer;
