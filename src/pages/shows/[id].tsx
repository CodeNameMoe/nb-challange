import React from 'react'
// import { GetStaticPaths, GetStaticProps } from 'next';
// import { getShowById, Show } from '../getShowById';
import NavBar from '@/components/navbar/NavBar'
import ShowDetails from '../../components/showDetails/ShowDetails';

function details() {
  return (
    <div>
        <NavBar />
        <ShowDetails/>
    </div>
  )
}

export default details