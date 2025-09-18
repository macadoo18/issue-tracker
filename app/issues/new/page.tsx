'use client';

import { Button, Callout, TextField, Text } from '@radix-ui/themes';
import { FaceIcon } from '@radix-ui/react-icons';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { createIssueSchema } from '@/app/validationSchemas';
import { z } from 'zod';

type IssueForm = z.infer<typeof createIssueSchema>;

const NewIssuesPage = () => {
  const [error, setError] = useState('');

  const router = useRouter();
  const { register, control, handleSubmit, formState: { errors } } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema)
  });

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
        { errors.title && <Text color='red' as='p'>{errors.title.message}</Text> }

        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Description of issue…" {...field} />
          )}
        />
        { errors.description && <Text color='red' as='p'>{errors.description.message}</Text> }

        <span className="m-auto">
          <Button>Submit</Button>
        </span>
      </form>
    </div>
  );
};

export default NewIssuesPage;
