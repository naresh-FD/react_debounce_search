import React, { useState, useEffect } from 'react';
import axios from 'axios';
import User from './User';

export const Users = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get('https://reqres.in/api/users/')
      .then((res: any) => {
        setUser(res.data);
      })
      .catch((Error: any) => {
        console.log(Error);
      });
  }, []);

  return (
    <div>
      <User prop={user} />
    </div>
  );
};
