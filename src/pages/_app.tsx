import '@/styles/globals.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app'

const client = new ApolloClient({
  uri: 'https://tv-bland-graphql.onrender.com/graphql',
  cache: new InMemoryCache(),
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
        <Component {...pageProps} />
    </ApolloProvider>
    )
}
