import axios from 'axios';

// action creator
export const loadStoreAndProducts = () => (dispatch) => {
  let storeData;
  let productData;

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
}