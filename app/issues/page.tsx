import { Button } from '@radix-ui/themes';
import Link from 'next/link';
import React from 'react';

const IssuesPage = () => {
  return (
    <>
      <h1>Issues Page</h1>
      <Link href='/issues/new'><Button>New Issues Page</Button></Link>
    </>
  );
};

export default IssuesPage;
