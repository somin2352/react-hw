import { type UserInfo } from '@/data/card/type';
import Card from '../card/card';
import './searched-list.css';

interface SearchedListProps {
  list: UserInfo[];
}

function SearchedList({ list }: SearchedListProps) {
  return (
    <div className="searched-list">
      {list.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
}

export default SearchedList;
