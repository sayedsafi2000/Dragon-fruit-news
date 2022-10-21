import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummeryCard from './Shared/newsSummeryCard';

const Category = () => {
    const news = useLoaderData();
    return (
        <div>
            <h3>This is category {news.length}</h3>
            {
                news.map(news => <NewsSummeryCard
                key={news._id}
                    news={news}
                ></NewsSummeryCard>)
            }
        </div>
    );
};

export default Category;