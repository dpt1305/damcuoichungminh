import { notification } from '@/components/common/AntdMessageWrapper';
import { RefreshTokenError } from '@/config/error';
import { useAppDispatch } from '@/store/hooks';
import { signOut } from '@/store/reducers/auth.reducer';
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { PropsWithChildren, useState } from 'react';

function QueryProvider({ children }: PropsWithChildren) {
  const dispatch = useAppDispatch();

  const handleQueryError = (error: Error) => {
    if (error instanceof RefreshTokenError) {
      dispatch(signOut());
      return;
    }

    if (error instanceof AxiosError && error.response?.status === 400) {
      const errorMessage = Array.isArray(error.response?.data?.message)
        ? error.response?.data?.message.join(', ')
        : error.response?.data?.message;
      notification.error({
        message: errorMessage,
      });
    }
  };

  const [queryClient] = useState(
    () =>
      new QueryClient({
        queryCache: new QueryCache({
          onError: handleQueryError,
        }),
        defaultOptions: {
          queries: {
            retry: false,
            refetchOnWindowFocus: false,
          },
        },
      }),
  );

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

export default QueryProvider;
