import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('./categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h2>All Caterogy</h2>
            {
                categories.map(category => <Link to={`/category/${category.id}`} className='block mb-4 text-xl' key={category.id}>{category.name}</Link> )
            }
        </div>
    );
};

export default LeftSideNav;