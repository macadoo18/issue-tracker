'use client';

import { Button, Callout, TextField } from '@radix-ui/themes';
import { FaceIcon } from '@radix-ui/react-icons';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuesPage = () => {
  const [error, setError] = useState('');

  const router = useRouter();
  const { register, control, handleSubmit } = useForm<IssueForm>();

  return (
    <div className="max-w-xl m-auto">
      {error && (
        <Callout.Root color='red' className='mb-5'>
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}

      <form
        className="flex flex-col"
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post('/api/issues', data);
            router.push('/issues');
          } catch (error) {
            setError('An unexpected error occurred');
          }
        })}
      >
        <TextField.Root placeholder="Title" {...register('title')} className='mb-5'>
          <TextField.Slot>
            <FaceIcon height="16" width="16" />
          </TextField.Slot>
        </TextField.Root>

        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description of issue…" {...field} />
          )}
        />

        <span className="m-auto">
          <Button>Submit</Button>
        </span>
      </form>
    </div>
  );
};

export default NewIssuesPage;
