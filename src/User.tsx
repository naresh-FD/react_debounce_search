import React from 'react';
import { useState } from 'react';
import useDebounce from './UseDebounce';

interface user {
  id: number;
  first_name: string;
  email: string;
  avatar: string | undefined;
}

export default function User({ prop }: any) {
  const { data } = prop;
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState(data);
  useDebounce(
    () => {
      setFilter(
        data.filter((d: { first_name: string }) =>
          d.first_name?.toLowerCase().includes(search.toLowerCase())
        )
      );
    },
    [data, search],
    300
  );
  const handleSearch = (e: { target: { value: React.SetStateAction<string> } }) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };
  return (
    <div>
      <input
        id='search'
        type='search'
        spellCheck='false'
        placeholder='Search a Title'
        value={search || ''}
        onChange={handleSearch}
      />
      {filter?.map((user: user) => (
        <ul key={user.id}>
          <li>{user.first_name}</li>
          <li>{user.email}</li>
          <li>
            <img src={user.avatar} placeholder={user.first_name} alt={user.first_name} />
          </li>
        </ul>
      ))}
    </div>
  );
}
