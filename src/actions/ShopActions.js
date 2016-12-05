import types from '../constants/ActionTypes';

export function readAll() {
  console.log('readAll run')
  return {
    // REQUEST | SUCCESS | ERROR were declared for optimistic update
    types: [types.READ_ALL_PRODUCTS_REQUEST, types.READ_ALL_PRODUCTS_SUCCESS, types.READ_ALL_PRODUCTS_ERROR],
    // WebAPIUtils 會操作遠端 REST API 獲取資料
  };
}

export function readOne({ id }) {

  console.log('readOne >id: ', id, ' >arguments: ', arguments);

  return {
    types: [types.READ_ONE_PRODUCT_REQUEST, types.READ_ONE_PRODUCT_SUCCESS, types.READ_ONE_PRODUCT_ERROR],
  };

}

export function addToCart(product) {

  // optimistic update: add transacation_id for updating the object after it's returned from server
  product = product.set('tid', 't_' + Math.random() * 100);

  return {
    types: [types.ADD_TO_CART_REQUEST, types.ADD_TO_CART_SUCCESS, types.ADD_TO_CART_ERROR],

    result: product,
  };
}


export function cartCheckout(products) {
  return {
    types: [types.CART_CHECKOUT_REQUEST, types.CART_CHECKOUT_SUCCESS, types.CART_CHECKOUT_ERROR],

    products
  };
}
