'use client';

import { Box, Flex, TextArea, TextField } from '@radix-ui/themes';
import { FaceIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons';

import React from 'react';

const NewIssuesPage = () => {
  return (
    <>
      <Flex width="100%" direction="column">
        <Box width="350px" m="auto" pb="10px">
          <TextField.Root placeholder="Full name…">
            <TextField.Slot>
              <FaceIcon height="16" width="16" />
            </TextField.Slot>
          </TextField.Root>
        </Box>

        <Box width="350px" m="auto">
            <TextArea rows={8} placeholder="Description of issue…" />
        </Box>
      </Flex>
    </>
  );
};

export default NewIssuesPage;
