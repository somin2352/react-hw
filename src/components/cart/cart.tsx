import CartItem from '../cart-item/cart-item';
import CartIcon from '/cart-img/cartIcon.svg';
import './cart.css';
import { useState } from 'react';

interface ProductListType {
  id: string;
  image: string;
  name: string;
  price: number;
  max: number;
}

const productList: ProductListType[] = [
  {
    id: 'product-1',
    image: '/cart-img/product1.png',
    name: '1A 우유 900mL',
    price: 1880,
    max: 10,
  },
  {
    id: 'product-2',
    image: '/cart-img/product2.png',
    name: '맛있는 콩나물 500g',
    price: 1280,
    max: 5,
  },
  {
    id: 'product-3',
    image: '/cart-img/product3.png',
    name: '고소한 두부 1kg',
    price: 2280,
    max: 3,
  },
];

function Cart() {
  const [productCount, setProductCount] = useState(() => {
    const initialCount: { [key: string]: number } = {};
    productList.forEach((product) => {
      initialCount[product.id] = 1;
    });
    return initialCount;
  });

  const totalPrice = productList.reduce((total, product) => {
    return (total = total + product.price * productCount[product.id]);
  }, 0);

  const handleUpdateTotalPrice = (id: string, count: number) => {
    setProductCount((prevCount) => ({
      ...prevCount,
      [id]: count,
    }));
  };

  return (
    <div className="cart">
      <h2 className="cartTitle">
        <img src={CartIcon} alt="장바구니 아이콘" aria-hidden="true"></img>
        <span>장바구니</span>
      </h2>

      <div className="cartList">
        {productList.map((item) => (
          <CartItem
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
            max={item.max}
            onUpdate={(count: number) => handleUpdateTotalPrice(item.id, count)}
          />
        ))}
      </div>

      <dl className="totalPrice">
        <dt id="totalPrice">구매 총액:</dt>
        <dd className="price" aria-labelledby="totalPrice" aria-live="polite">
          {totalPrice.toLocaleString()}원
        </dd>
      </dl>
    </div>
  );
}

export default Cart;
