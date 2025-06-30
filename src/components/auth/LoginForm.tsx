'use client';
import { useLogin } from '@/hooks/auth/useLogin';
import { LoginBody, LoginSchema } from '@/schemas/auth/auth.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from 'antd';
import { Control, useForm } from 'react-hook-form';
import InputText from '../common/InputText';

function LoginForm() {
  const { control, handleSubmit } = useForm<LoginBody>({
    resolver: zodResolver(LoginSchema),
  });
  const { mutate: login, isPending } = useLogin();

  const onSubmit = handleSubmit((data) => {
    login(data);
  });

  return (
    <div
      className="w-96 p-10 rounded bg-white shadow-lg"
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          onSubmit();
        }
      }}
    >
      <div className="font-bold text-2xl mb-6">Login</div>
      <InputText
        control={control as unknown as Control}
        label="Username"
        placeholder="Username"
        name="username"
        required
      />
      <InputText
        control={control as unknown as Control}
        type="password"
        label="Password"
        placeholder="Password"
        name="password"
        required
      />
      <div className="flex justify-end mt-2">
        <Button type="primary" disabled={isPending} onClick={onSubmit}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default LoginForm;
