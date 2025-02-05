import CountButton from '../cart-count-button/count-button';
import './cart-item.css';
import Product1 from '/cart-img/product1.png';

function CartItem() {
  return (
    <article className="cartItem">
      <p className="sr-only">장바구니 품목</p>
      <img src={Product1} alt="상품 이미지" className="productImg" />
      <dl className="productDetail">
        <dt className="sr-only">상품명</dt>
        <dd className="productName">1A 우유 900mL</dd>
        <dt className="sr-only">가격</dt>
        <dd className="productPrice">1,880원</dd>
      </dl>
      <CountButton />
    </article>
  );
}

export default CartItem;
