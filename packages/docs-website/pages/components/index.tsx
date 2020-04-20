import React from 'react';

import { NextPage } from 'next';
import { useRouter } from 'next/router';

const Components: NextPage<{}> = () => {
  const router = useRouter();

  React.useEffect(() => {
    router.replace(`${process.env.BASE_URL}/components/avatar`);
  }, []);

  return null;
};
export default Components;
