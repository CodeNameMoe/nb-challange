import React, {useState, useEffect} from 'react'
import { useQuery, gql } from '@apollo/client';
import Show  from '../showCard/ShowCard';
import styles from "../showList/showList.module.css"
import ShowCard from '../showCard/ShowCard'
import { motion } from "framer-motion"

const GET_SHOWS = gql`
  query {
    schedule {
      id
      name
      image
    }
  }
`;

function ShowList() {
  
  
  const { loading, error, data } = useQuery(GET_SHOWS);
  console.log(data)



if (loading) {
  return (
    <div className={styles.loading}>
       <img src="/assets/loading.gif" alt="My Icon" />
    </div>
         
  );
}

if (error) {
  return <p>Error: {error.message}</p>;
}

return (
<section className={styles.showlist}>
  <h2>Last Added Shows</h2>
  <section className={styles.cardSection}>
    {data?.schedule?.map((show: Show, i: number ) => (
        <ShowCard  key={show.id} show={{ id: show.id, name: show.name, image: show.image }} index={i}  />
        ))}
  </section>
   
</section>
);
}

export default ShowList