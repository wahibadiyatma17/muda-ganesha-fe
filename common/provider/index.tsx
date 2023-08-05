'use client';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CacheProvider } from '@chakra-ui/next-js';

import theme from '@/styles/chakraStyle';
import DefaultSEO from '../seo/config';

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <DefaultSEO />
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </ChakraProvider>
    </CacheProvider>
  );
}

export default Providers;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * 1000,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});
