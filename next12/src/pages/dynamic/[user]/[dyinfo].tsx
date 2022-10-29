import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const User = () => {
  // {baseURL}/dynamic/test/test?uid=1
  const Router = useRouter();
  const [name, setName] = useState('');
  const { uid } = Router.query;

  useEffect(() => {
    if (uid !== null) {
      fetch(`/api/use-info/${uid}`)
        .then((res) => res.json())
        .then((data) => setName(data.name));
    }
  }, [uid]);

  return (
    <>
      <h1>{name}</h1>
    </>
  );
};

export default User;
