import axios from 'axios';

// action creator
export const loadStoreAndProducts = () => (dispatch) => {
  let storeData;
  let productData;
  
  dispatch({
    type: "LOADING"
  })

  const apiStore = `http://us-central1-test-b7665.cloudfunctions.net/api/stores/${process.env.REACT_APP_DASHBOARD_API}`;

  const apiProdcuts = `http://us-central1-test-b7665.cloudfunctions.net/api/stores/${process.env.REACT_APP_DASHBOARD_API}/products`;

  axios.all([
    axios.get(apiStore),
    axios.get(apiProdcuts)
  ]).then(data => {
    storeData = data[0].data;
    productData = data[1].data;
    dispatch({
      type: 'FETCH_STORE',
      payload: {
        store: storeData,
        products: productData,
      }
    })
  }).catch((err) => {
    console.log(`error to api ${err}`);
  });
};

export const addProduct = (title, desc, category, price, employee) => (dispatch) => {

  const apiAddProdcut = `http://us-central1-test-b7665.cloudfunctions.net/api/stores/${process.env.REACT_APP_DASHBOARD_API}/products`;

  // let data = JSON.stringify({
  //   "title": title,
  //   "category": category,
  //   "price": price,
  //   "employee": employee,
  //   "description": desc
  // });

  axios.post(apiAddProdcut, {
    "title": title,
    "category": category,
    "price": price,
    "employee": employee,
    "description": desc
  })
  .then((response) => {

    dispatch({
      type: "NEW_PRODUCT",
      payload: {
        addedProducts: response.data,
      }
    })

    setTimeout(() => {
      window.location.reload();
    }, 2500);

  }, (error) => {
    console.log(error);
  });
  
};

export const deleteProduct = (id) => (dispatch) => {
  
  const apiDeleteProdcut = `http://us-central1-test-b7665.cloudfunctions.net/api/stores/${process.env.REACT_APP_DASHBOARD_API}/products/${id}`;

  axios.delete(apiDeleteProdcut).then(res => {
    console.log(res, "deleted");
    setTimeout(() => {
      window.location.reload();
    }, 2500);
  }).catch((err) => {
    console.log(`error to api ${err}`);
  });

  // dispatch({
  //   type: "FORM_VISIBLE"
  // })
}

export const loadForm = () => (dispatch) => {
  dispatch({
    type: "FORM_VISIBLE"
  })
}

export const hideForm = () => (dispatch) => {
  dispatch({
    type: "FORM_NOT_VISIBLE"
  })
}