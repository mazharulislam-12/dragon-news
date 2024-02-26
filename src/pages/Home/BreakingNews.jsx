import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex items-center">
            <button className='btn bg-[#D72050] text-white hover:text-black'>Breaking News</button>
            <Marquee pauseOnHover={true} speed={70}>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Marquee>
        </div>
    );
};

export default BreakingNews;