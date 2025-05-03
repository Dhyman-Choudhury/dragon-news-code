import React from 'react';
import { FaEye, FaStar, FaBookmark, FaShareAlt } from 'react-icons/fa';
import { format } from 'date-fns';
import { Link } from 'react-router';

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
    tags,
  } = news;

  return (
    <div className="card bg-base-100 shadow-xl  relative">
      {/* Bookmark & Share Icons */}
      <div className="absolute  right-4 top-4 flex gap-2 text-gray-500">
        <button className="hover:text-primary transition-colors">
          <FaBookmark />
        </button>
        <button className="hover:text-primary transition-colors">
          <FaShareAlt />
        </button>
      </div>

      {/* Author Info */}
      <div className="flex items-center bg-base-200 gap-3 px-5 pt-5">
        <img src={author.img} alt={author.name} className="w-10 h-10 rounded-full" />
        <div>
          <h2 className="font-semibold text-sm">{author.name}</h2>
          <p className="text-xs text-gray-500">{format(new Date(author.published_date), 'PPP')}</p>
        </div>
      </div>

      {/* Image */}
      <figure className="px-5 pt-3">
        <img src={thumbnail_url} alt={title} className="rounded-xl w-full max-h-56 object-cover" />
      </figure>

      {/* Body */}
      <div className="card-body px-5 py-4">
        <h2 className="card-title text-lg">{title}</h2>
        <div className="text-sm text-accent">
          {details.length > 200 ? (
            <>
              {details.slice(0, 200)}...
              <Link to={`/news-details/${id}`} className='text-primary font-semibold cursor-pinter hover:underline'>
                Read More
              </Link>
            </>
          ) : (
            details
          )}
        </div>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <div key={idx} className="badge badge-outline text-xs">{tag}</div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-1 text-orange-500">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className={i < rating.number ? 'fill-current' : 'opacity-30'} />
            ))}
            <span className="text-sm text-gray-600 ml-1">({rating.number})</span>
          </div>

          <div className="flex items-center gap-1 text-gray-500">
            <FaEye />
            <span className="text-sm">{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
