import SearchForm from '@/components/search-form/search-form';
import SearchedList from '@/components/searched-list/searched-list';
import './card-search-list.css';
import users from '@/data/card/card';
import { type UserInfo } from '@/data/card/type';
import { useState } from 'react';

function CardSearchList() {
  const [userList] = useState<UserInfo[]>(users);

  return (
    <div className="card-search-list">
      <SearchForm />
      <div className="card-list">
        <SearchedList list={userList} />
      </div>
    </div>
  );
}

export default CardSearchList;
