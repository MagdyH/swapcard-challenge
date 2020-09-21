import React from 'react';
import { useQuery, gql } from '@apollo/client';
import SearchResult from '../components/search-result';

function Home() {

    return (
        <>
            <SearchResult />
        </>
    )
}

export default Home;