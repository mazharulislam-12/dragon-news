import { useParams } from 'react-router-dom';
import Header from '../shared/Header/Header';
import RightSideNav from '../shared/RightSideNav/RightSideNav';
import Navbar from '../shared/Navbar/Navbar.jsx'

const News = () => {

    const {_id} = useParams();

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>

            <div className='grid mx-auto md:grid-cols-4'>
                <div className='col-span-3'>
                    <h2>Dragon News  </h2>
                    <p>{_id}</p>
                    

                </div>
                <div className='col-span-1'>
                    <RightSideNav></RightSideNav>
                </div>
            </div>

        </div>
    );
};

export default News;