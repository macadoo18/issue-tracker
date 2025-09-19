import { Button } from '@radix-ui/themes';
import Link from 'next/link';
import React from 'react';

const IssuesPage = () => {
  return (
    <>
      <Link href="/issues/new" className="absolute ml-2">
        <Button>Create New Issue</Button>
      </Link>
      <h1 className="text-2xl text-center">Issues</h1>
    </>
  );
};

export default IssuesPage;
