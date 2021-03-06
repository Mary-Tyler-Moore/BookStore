import fetchFromFile from '../../util/fetchData';

export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const SORT_ASC = 'SORT_ASC';
export const SORT_DESC = 'SORT_DESC';

export function successFetchProducts() {
  return (dispatch) => {
    fetchFromFile()
      .then(res => {
        dispatch(fetchProducts(res.books));
      });
  }
}

export function fetchProducts(products) {
  return {
    type: FETCH_PRODUCTS,
    products,
  }
}

export function sortAsc(field) {
  return {
    type: SORT_ASC,
    field,
  }
}

export function sortDesc(field) {
  return {
    type: SORT_DESC,
    field,
  }
}
