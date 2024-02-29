import { useParams } from 'react-router-dom';
import Header from '../shared/Header/Header';
import RightSideNav from '../shared/RightSideNav/RightSideNav';
import Navbar from '../shared/Navbar/Navbar.jsx'
import { useEffect, useState } from 'react';


const News = () => {

    const { _id: id } = useParams();

    const [newsData, setNewsData] = useState([])

    useEffect(() => {
        fetch('/news.json')
            .then(res => res.json())
            .then(data => data.find((obj) => obj._id === id))
            .then(filteredData => setNewsData(filteredData))
    }, [])

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>

            <div className='flex  '>
                <div className='col-span-3'>
                    <h2>Dragon News </h2>

                 

                    <img src= {newsData.image_url} className='w-96' alt="" />
                    <h2>{newsData.title}</h2>
                    <p>{newsData.details}</p>
                    <button className='btn bg-[#D72050]'>All news in this category</button> 

                </div>
                <div className='col-span-1'>
                    <RightSideNav></RightSideNav>
                </div>
            </div>



        </div>
    );
};

export default News;