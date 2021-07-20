import reducers from '../../reducers';

test('reducers', () => {
  let state;
  state = reducers({
    productList: {
      loading: false,
      error: 'Request failed with status code 500'
    },
    productDetails: {
      product: {
        reviews: []
      }
    },
    productDelete: {},
    productCreate: {},
    productUpdate: {
      product: {}
    },
    productReviewCreate: {},
    productTopRated: {
      loading: true,
      products: []
    },
    cart: {
      cartItems: [],
      shippingAddress: {}
    },
    userLogin: {
      userInfo: null
    },
    userRegister: {},
    userDetails: {
      user: {}
    },
    userUpdateProfile: {},
    userList: {
      users: []
    },
    userDelete: {},
    userUpdate: {
      user: {}
    },
    orderCreate: {},
    orderDetails: {
      loading: true,
      orderItems: [],
      shippingAddress: {}
    },
    orderPay: {},
    orderDeliver: {},
    orderListMy: {
      orders: []
    },
    orderList: {
      orders: []
    }
  }, {
    type: 'PRODUCT_TOP_FAIL',
    payload: 'Request failed with status code 500'
  });
  expect(state).toEqual({
    productList: {
      loading: false,
      error: 'Request failed with status code 500'
    },
    productDetails: {
      product: {
        reviews: []
      }
    },
    productDelete: {},
    productCreate: {},
    productUpdate: {
      product: {}
    },
    productReviewCreate: {},
    productTopRated: {
      loading: false,
      error: 'Request failed with status code 500'
    },
    cart: {
      cartItems: [],
      shippingAddress: {}
    },
    userLogin: {
      userInfo: null
    },
    userRegister: {},
    userDetails: {
      user: {}
    },
    userUpdateProfile: {},
    userList: {
      users: []
    },
    userDelete: {},
    userUpdate: {
      user: {}
    },
    orderCreate: {},
    orderDetails: {
      loading: true,
      orderItems: [],
      shippingAddress: {}
    },
    orderPay: {},
    orderDeliver: {},
    orderListMy: {
      orders: []
    },
    orderList: {
      orders: []
    }
  });
});