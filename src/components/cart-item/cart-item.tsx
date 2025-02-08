import CountButton from '../cart-count-button/count-button';
import './cart-item.css';

type CartItemType = {
  image: string;
  name: string;
  price: number;
  onUpdate?: (count: number) => void;
};

function CartItem({ image, name, price, onUpdate }: CartItemType) {
  return (
    <article className="cartItem">
      <p className="sr-only">상품</p>
      <img src={image} alt="상품 이미지" className="productImg" />
      <dl className="productDetail">
        <dt className="sr-only" id="productName">
          상품명
        </dt>
        <dd aria-labelledby="productName" className="productName">
          {name}
        </dd>
        <dt className="sr-only" id="productPrice">
          가격
        </dt>
        <dd className="productPrice" aria-labelledby="productPrice">
          {price.toLocaleString()}원
        </dd>
      </dl>
      <CountButton onUpdate={onUpdate} />
    </article>
  );
}

export default CartItem;
