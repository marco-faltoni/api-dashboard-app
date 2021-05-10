const initState = {
  store: [],
  products: [],
  isLoading: true,
  isFormOpen: false,
  newProduct: [],
}

export const localReducer = (state=initState, action) => {
  switch(action.type){
      case "FETCH_STORE":
        return {
          ...state, 
          store: action.payload.store,
          products: action.payload.products,
          isLoading: false,
          isFormOpen: false,
        };
      case "LOADING":
        return{
          ...state,
          isLoading: true,
        };
      case "NEW_PRODUCT":
        return{
          ...state,
          newProduct: action.payload.addedProducts
        };
      case "FORM_VISIBLE":
        return{
          ...state,
          isFormOpen: true,
        };
      case "FORM_NOT_VISIBLE":
        return{
          ...state,
          isFormOpen: false,
        };
      default:
          return {...state};
  }
}

export default localReducer;