import { FaBookmark, FaShare } from "react-icons/fa";

const NewsCard = ({ news }) => {
    const { title, rating, total_view, author, thumbnail_url, image_url } = news;
    return (
        <div className="card   bg-base-100 shadow-xl mb-10">

            <div className="flex w-[640px] rounded-lg  justify-start bg-[#F3F3F3] items-center gap-5 -mr-12">
                <img className="w-20 rounded-full" src={author.img} alt="" />
                <div className="">
                    <h3>{author.name}</h3>
                    <p>{author.published_date}</p>
                </div>

                <div className=" flex gap-6 ml-64">
                    <FaBookmark></FaBookmark>
                    <FaShare></FaShare>
                </div>
            </div>

            <figure><img src={image_url} className="w-full" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;