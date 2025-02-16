import { type UserInfo } from '@/data/card/type';
import Card from '../card/card';
import './searched-list.css';

interface SearchedListProps {
  list: UserInfo[];
  query: string;
}

function SearchedList({ list, query }: SearchedListProps) {
  const words = query
    .split(' ')
    .filter(Boolean)
    .map((word) => word.toLowerCase().trim());

  const filteredList = list.filter((item) =>
    words.every(
      (word) =>
        item.name.toLowerCase().includes(word) || item.tags.includes(word)
    )
  );

  const isEmpty = filteredList.length === 0;

  return (
    <div className="searched-list">
      {isEmpty && <p>&ldquo;{query}&ldquo; 검색된 정보가 없습니다..🥲</p>}

      {!isEmpty &&
        filteredList.map((item) => <Card key={item.id} item={item} />)}
    </div>
  );
}

export default SearchedList;
