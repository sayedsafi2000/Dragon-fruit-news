import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummeryCard from './Shared/newsSummeryCard';

const Home = () => {
    const allNews = useLoaderData();
    return (
        <div>
            <h2>this is home {allNews.length}</h2>
            {
                allNews.map(news => <NewsSummeryCard
                key={news._id}
                news={news}
                ></NewsSummeryCard>)
            }
        </div>
    );
};

export default Home;