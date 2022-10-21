import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/news-categories")
            .then(res => res.json())
            .then(data => setCategories(data))
    }
        , [])

    return (
        <div className=''>
            <h2>categories length {categories.length}</h2>
            <div>
                {
                    categories.map(catagory => <p 
                    key={catagory.id}
                    >
                    <Link to={`/category/${catagory.id}`}>
                    {catagory.name}
                    </Link>
                    </p> )
                }
            </div>
        </div>
    );
};

export default LeftSideNav;