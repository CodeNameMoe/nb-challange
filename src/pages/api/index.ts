// import express, { Request, Response } from 'express';
// import { graphqlHTTP } from 'express-graphql';
// import { buildSchema } from 'graphql';
// import fetch, { Response as FetchResponse } from 'node-fetch';


// const PORT = 4000;

// const API_BASE_URL: string = 'https://api.tvmaze.com';

// // Define the types for the GraphQL API
// interface Show {
//   id: number;
//   name: string;
//   rating?: number;
//   image: string;
//   summary?: string;
//   network?: string;
//   airDay?: string;
//   status?: string;
//   genres?: string[];
//   cast?: CastMember[];
// }

// interface CastMember {
//   name: string;
//   characterName?: string;
// }

// interface ScheduleQueryResult {
//   id: number;
//   name: string;
//   rating: { average: number };
//   image: { medium: string };
// }

// // Define the schema for the GraphQL API
// const schema = buildSchema(`
//   type Show {
//     id: Int!
//     name: String!
//     rating: Float
//     image: String
//     summary: String
//     network: String
//     airDay: String
//     status: String
//     genres: [String]
//     cast: [CastMember]
//   }

//   type CastMember {
//     name: String!
//     characterName: String
//   }

//   type Query {
//     schedule: [Show]
//     show(id: Int!): Show
//   }
// `);

// // Define the resolvers for the schema
// const root = {
//   schedule: async (): Promise<Show[]> => {
//     const response: FetchResponse = await fetch(`${API_BASE_URL}/schedule`);
//     const scheduleData = await response.json() as ScheduleQueryResult[];
//     return scheduleData.map(transformShowData);
//   },

//   show: async ({ id }: { id: number }): Promise<Show> => {
//     const [showResponse, castResponse]: FetchResponse[] = await Promise.all([
//       fetch(`${API_BASE_URL}/shows/${id}`),
//       fetch(`${API_BASE_URL}/shows/${id}/cast`),
//     ]);
//     const showData: any = await showResponse.json();
//     const castData: any = await castResponse.json();
//     return transformShowData(showData, castData);
//   },
// };

// // Helper function to transform raw show and cast data into the format we want
// function transformShowData(showData: any, castData?: any): Show {
//   const cast: CastMember[] | undefined = castData?.map(({ person, character }: any) => ({
//     name: person.name,
//     characterName: character.name,
//   }));
//   return {
//     id: showData.id,
//     name: showData.name,
//     rating: showData.rating?.average,
//     image: showData.image?.medium,
//     summary: showData.summary,
//     network: showData.network?.name,
//     airDay: showData.schedule.days[0],
//     status: showData.status,
//     genres: showData.genres,
//     cast,
//   };
// }

// const app = express();

// // Set up the GraphQL endpoint
// app.use(
//   '/graphql',
//   graphqlHTTP({
//     schema,
//     rootValue: root,
//     graphiql: true,
//   })
// );

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server listening on port ${PORT}`);
// });
