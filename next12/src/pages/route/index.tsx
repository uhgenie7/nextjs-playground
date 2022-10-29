import React, { useEffect, useReducer, useState } from 'react';
import Link from 'next/link';
import Router, { useRouter } from 'next/router';
const MyRoute = () => {
  const router = useRouter();
  const { status = 'initial' } = router.query;
  const [click, setClick] = useState(false);

  return (
    <>
      <p>Click: {String(click)}</p>
      <p>status: {status}</p>
      <button
        onClick={() => {
          alert('edit');
          setClick(true);
          location.replace('/route?status=edit');
        }}
      >
        edit(replace)
      </button>
      <button
        onClick={() => {
          alert('edit');
          setClick(true);
          router.push('/route?status=edit');
        }}
      >
        edit(push)
      </button>
      <button
        onClick={() => {
          alert('edit');
          setClick(true);
          router.push('/route?status=edit', undefined, { shallow: true });
        }}
      >
        edit(replace)
      </button>
    </>
  );
};

export default MyRoute;
