import React, { useEffect, useState } from 'react';

const UsernameInfo = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    // {baseurl}/genie/name
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => setName(data.name));
  }, []);

  return (
    <>
      <h1>{name}</h1>
    </>
  );
};

export default UsernameInfo;
