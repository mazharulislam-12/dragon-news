import React, { useEffect, useState } from 'react';
import Header from '../shared/Header/Header';
import Navbar from '../shared/Navbar/Navbar';
import SingleBlog from './SingleBlog';

const Blogs = () => {

    const [blogData, setBlogData] = useState([]);

    useEffect(() => {
        fetch('/news.json')
            .then(res => res.json())
            .then(data => setBlogData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);


    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    blogData.map(blog => <SingleBlog key={blogData._id} blog={blog} ></SingleBlog>  )
                }
            </div>



        </div>
    );
};

export default Blogs;