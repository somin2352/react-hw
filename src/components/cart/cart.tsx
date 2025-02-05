import CartItem from '../cart-item/cart-item';
import CartIcon from '/cart-img/cartIcon.svg';
import './cart.css';

interface ProductListType {
  id: string;
  image: string;
  name: string;
  price: number;
}

const productList: ProductListType[] = [
  {
    id: 'product-1',
    image: '/cart-img/product1.png',
    name: '1A 우유 900mL',
    price: 1880,
  },
  {
    id: 'product-2',
    image: '/cart-img/product2.png',
    name: '맛있는 콩나물 500g',
    price: 1280,
  },
  {
    id: 'product-3',
    image: '/cart-img/product3.png',
    name: '고소한 두부 1kg',
    price: 2280,
  },
];

function Cart() {
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
          />
        ))}
      </div>

      <dl className="totalPrice">
        <dt id="totalPrice">구매 총액:</dt>
        <dd className="price" aria-labelledby="totalPrice">
          8,600원
        </dd>
      </dl>
    </div>
  );
}

export default Cart;
