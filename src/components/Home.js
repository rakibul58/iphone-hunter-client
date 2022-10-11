import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const phones = useLoaderData();
    return (
        <div>
            <h3>Show me all the phones</h3>
            <h1>I have {phones.length}</h1>
        </div>
    );
};

export default Home;