import './count-button.css';

function CountButton() {
  return (
    <div className="countButton">
      <button type="button" className="minus">
        -
      </button>
      <span className="countNumber">0</span>
      <button type="button" className="plus">
        +
      </button>
    </div>
  );
}
export default CountButton;
