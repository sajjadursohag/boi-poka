import React, { use } from "react";
import { FaStarHalfStroke } from "react-icons/fa6";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  // const data = use(bookPromise);
  // console.log(data);

  const {
    bookName,
    author,
    image,
    rating,
    category,
    tags,
    yearOfPublishing,
    publisher,
    bookId,
  } = singleBook;

  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-sm border p-6">
        <figure className="p-4 bg-gray-100 w-2/3 mx-auto">
          <img className="h-[166px] rounded-lg" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-center gap-10 mb-2">
            {tags.map((tag) => (
              <button>{tag}</button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">{yearOfPublishing}</div>
          </h2>
          <p>Book by: {publisher}</p>
          <div className="border-t-2 border-dashed my-2"></div>
        </div>
        <div className="card-actions justify-between mt-4">
          <div className="badge badge-outline">{category}</div>
          <div className="badge badge-outline">
            {rating} <FaStarHalfStroke />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
