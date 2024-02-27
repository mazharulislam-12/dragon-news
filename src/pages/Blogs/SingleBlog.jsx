import React from 'react';

const SingleBlog = ({ blog }) => {
    const { image_url, title, details, total_view, author   } = blog;

    return (
        <div>
            <div className="card  w-96 flex-wrap  bg-base-100 shadow-xl">
                <figure><img src={image_url} className='w-80' alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{details.slice(0,200)}</p>
                    <div className="card-actions justify-end">
                        <p> Author:  {author.name}</p>
                        <p> total view : {total_view}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;