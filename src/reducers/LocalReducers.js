const initState = {
  store: [],
  products: [],
  isLoading: true,
}

export const localReducer = (state=initState, action) => {
  switch(action.type){
      case "FETCH_STORE":
        return {
          ...state, 
          store: action.payload.store,
          products: action.payload.products,
          isLoading: false
        };
      case "LOADING":
        return{
          ...state,
          isLoading: true,
        };
      default:
          return {...state};
  }
}

export default localReducer;