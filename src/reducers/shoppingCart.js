const updateCartItems = (cartItems, item, itemIdx) => {
  if (item.count === 0) {
    return [
      ...cartItems.slice(0, itemIdx),
      ...cartItems.slice(itemIdx + 1)
    ];
  }
  if (itemIdx === -1){
    return [
      ...cartItems,
      item
    ];
  }
  return [
    ...cartItems.slice(0, itemIdx),
    item,
    ...cartItems.slice(itemIdx + 1)
  ];
};

const updateOrder = (bookId, state, quantity) => {
  const { bookList: { books }, shoppingCart: { cartItems } } =state;
  const book = books.find(({id}) => id === bookId);
  const itemIdx = cartItems.findIndex(({id}) => id === book.id);
  const item = cartItems[itemIdx];
  const newItem = updateCartItem(book, item, quantity)
  return {
    orderTotal: 0,
    cartItems: updateCartItems(cartItems, newItem, itemIdx)
  };
}

const updateCartItem = (book, item = {}, quantity) => {
  const { 
    id = book.id,
    name = book.title, 
    count = 0, 
    total = 0
  } = item;
  return {
    id,
    name,
    count: count + quantity,
    total: total + quantity*book.price
  };
}

const updateShoppingCart = (state, action) => {

  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0
    };
  }
  switch (action.type) {
    case "BOOK_ADDED_TO_CART":
      return updateOrder(action.payload, state, 1);

    case "BOOK_REMOVE_FROM_CART":
      return updateOrder(action.payload, state, -1);

    case "ALL_BOOKS_REMOVE_FROM_CART":
      const item = state.shoppingCart.cartItems.find(({id}) => id === action.payload);
      return updateOrder(action.payload, state, -item.count);

    default:
      return state.shoppingCart
  }
}

export default updateShoppingCart;