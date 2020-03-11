import React from 'react';

import { NextPage } from 'next';
import { useRouter } from 'next/router';

const Components: NextPage<{}> = () => {
  const router = useRouter();

  React.useEffect(() => {
    router.push('/components/avatar');
  }, []);

  return null;
};
export default Components;
