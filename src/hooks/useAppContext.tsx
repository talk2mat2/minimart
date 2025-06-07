import {useContext} from 'react';
import {AppContext} from '../context/Appcontext';
import {data} from '../api/data';
import {appToast} from '../utils';

const UseAppContext = () => {
  const {addToCart, cart, clearCart, removeFromCart, reduceQty, increaseQty} =
    useContext(AppContext);
  const {show} = appToast();

  function addProductToCart(id: string) {
    const product = data?.products.find(item => item.id == id);
    if (product) {
      addToCart(product);
      show('Item has been added to cart', {
        type: 'normal',
        placement: 'top',
      });
    }
  }

  function subTotal() {
    let sum = 0;
    const total = cart.reduce(
      (partialSum, a) => partialSum + (a.qty || 1) * a.price,
      0,
    );
    sum = total;
    return sum;
  }

  function removeProductFromCart(id) {
    removeFromCart(id);
    show('Item has been removed from  cart', {
      type: 'normal',
      placement: 'top',
    });
  }

  return {
    addProductToCart,
    cart,
    clearCart,
    removeFromCart,
    removeProductFromCart,
    reduceQty,
    increaseQty,
    subTotal,
  };
};

export default UseAppContext;
