import React from 'react';
import Header from '../shared/Header/Header';
import Navbar from '../shared/Navbar/Navbar';
import LeftSideNav from '../shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../shared/RightSideNav/RightSideNav';
import BreakingNews from './BreakingNews';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';

const Home = () => {

    const news = useLoaderData();
    console.log(news);

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>

            <div className='grid grid-cols-1 md:grid-cols-4'>
                <div className=''><LeftSideNav></LeftSideNav></div>
                {/* news container */}
                <div className='md:col-span-2 '>
                    <h2>Dragon News Home</h2>
                    {
                        news.map(aNews => <NewsCard key={aNews._id} news={aNews}>

                        </NewsCard>)
                    }
                </div>
                <div className=''><RightSideNav></RightSideNav></div>
            </div>

        </div>
    );
};

export default Home;