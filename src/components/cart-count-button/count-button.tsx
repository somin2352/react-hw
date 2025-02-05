import { useState } from 'react';
import './count-button.css';

function CountButton() {
  const [count, setCount] = useState<number>(0);

  const handleCountMinus = () => {
    if (count === 0) return;

    const nextCount = count - 1;
    setCount(nextCount);
  };

  const handleCountPlus = () => {
    const nextCount = count + 1;
    setCount(nextCount);
  };

  return (
    <div className="countButton">
      <button type="button" className="minus" onClick={handleCountMinus}>
        -
      </button>
      <span className="countNumber">{count}</span>
      <button type="button" className="plus" onClick={handleCountPlus}>
        +
      </button>
    </div>
  );
}
export default CountButton;
