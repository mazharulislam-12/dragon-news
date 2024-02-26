
import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center'>
            <img src= {logo} alt="" />
            <p className='text-lg'>Journalism Without Fear or Favour</p>
            <p className='text-xl'>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
        </div>
    );
};

export default Header;