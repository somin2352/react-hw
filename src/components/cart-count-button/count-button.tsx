import { useState } from 'react';
import './count-button.css';

interface CountButtonProps {
  onUpdate?: (nextCount: number) => void;
  max: number;
}

function CountButton({ onUpdate, max }: CountButtonProps) {
  const [count, setCount] = useState<number>(1);

  const handleCountMinus = () => {
    if (count === 1) return;

    const nextCount = count - 1;
    setCount(nextCount);

    onUpdate?.(nextCount);
  };

  const handleCountPlus = () => {
    if (count === max) return;

    const nextCount = count + 1;
    setCount(nextCount);

    onUpdate?.(nextCount);
  };

  return (
    <div className="countButton">
      <p className="sr-only">수량 버튼</p>
      <button
        type="button"
        className="minus"
        aria-label="수량 감소 버튼"
        aria-disabled={count === 1}
        onClick={handleCountMinus}
      >
        -
      </button>
      <span className="countNumber" aria-live="polite">
        {count}
      </span>
      <button
        type="button"
        className="plus"
        aria-label="수량 증가 버튼"
        aria-disabled={count === max}
        onClick={handleCountPlus}
      >
        +
      </button>
    </div>
  );
}
export default CountButton;
