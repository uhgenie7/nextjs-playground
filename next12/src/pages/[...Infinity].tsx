import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import SubLayout from '../components/SubLayout';

// 무한 슬러그

const Infinity = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    console.log('client');
    setTime(new Date().toISOString());
  }, []);

  return (
    <>
      <h1>{time}</h1>
      <p>슬러그가 여러개여도 문제 없는 페이지</p>
    </>
  );
};

export default Infinity;

Infinity.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
