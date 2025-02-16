import Search from '/Frame.svg';
import './search-form.css';

function SearchForm() {
  return (
    <div className="search-bar">
      <label htmlFor="search" className="sr-only">
        사용자 검색창
      </label>
      <img src={Search} alt="검색창 돋보기" />
      <input
        type="search"
        id="search"
        className="search"
        placeholder="Search users"
      />
    </div>
  );
}

export default SearchForm;
