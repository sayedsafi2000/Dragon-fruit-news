import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummeryCard from './Shared/newsSummeryCard';

const News = () => {
    const news= useLoaderData();
    return (
        <div>
           <NewsSummeryCard
            news={news}
           ></NewsSummeryCard>
            
        </div>
    );
};

export default News;