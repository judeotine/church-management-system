'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { Card } from '@/components/ui/card';
import { useMembers } from '@/components/members/members-context';
import { useToast } from '@/hooks/use-toast';
import PhotoUpload from './photo-upload';
import FormFields from './form-fields';

const formSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  address: z.string().min(1, 'Address is required'),
  role: z.string().min(1, 'Role is required'),
  status: z.string().min(1, 'Status is required'),
  notes: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function NewMemberForm() {
  const router = useRouter();
  const { addMember } = useMembers();
  const { toast } = useToast();
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      role: '',
      status: 'active',
      notes: '',
    },
  });

  function onSubmit(values: FormValues) {
    addMember({ ...values, photo: photo || undefined });
    toast({
      title: 'Success',
      description: 'Member has been added successfully.',
    });
    router.push('/members');
  }

  const handleCancel = () => {
    router.push('/members');
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setPhoto(file);
      setPhotoPreview(URL.createObjectURL(file));
    }
  };

  const handlePhotoClear = () => {
    setPhoto(null);
    setPhotoPreview(null);
  };

  const getInitials = () => {
    const firstName = form.watch('firstName');
    const lastName = form.watch('lastName');
    return `${firstName?.[0] || ''}${lastName?.[0] || ''}`;
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Card className="p-6">
          <PhotoUpload
            photoPreview={photoPreview}
            initials={getInitials()}
            onPhotoChange={handlePhotoChange}
            onPhotoClear={handlePhotoClear}
            hasPhoto={!!photo}
          />
          <FormFields form={form} />
        </Card>

        <div className="flex gap-4">
          <Button type="submit">Add Member</Button>
          <Button
            type="button"
            variant="outline"
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Form>
  );
}