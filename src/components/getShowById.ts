import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

type Show = {
  id: string;
  name: string;
  image: {
    medium: string;
  } | null;
  rating: {
    average: number;
  } | null;
  summary: string | null;
  network: {
    name: string;
  } | null;
  schedule: {
    days: string[];
  } | null;
  status: string;
  genres: string[];
}


export async function getShowById(id: string): Promise<Show> {
  const query = gql`
    query getShowById($id: ID!) {
      show(id: $id) {
        id
        name
        image {
          medium
        }
        rating {
          average
        }
        summary
        network {
          name
        }
        schedule {
          days
        }
        status
        genres
      }
    }
  `;

  const { data } = await client.query({
    query,
    variables: { id },
  });


  return data.show;
}
