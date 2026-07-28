import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id)
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);
 const {bookName, image, review} = singleBook || {};

 const handleMarkAsRead =id=> {
  // store with id
  // where to store
  // array or collection
  // if book alrady exist then show a alert
  // if bok not exist then push in the collection or array

 }
  return (
    <div className="w-2/3 mx-auto">
      <img className="w-48" src={image} alt="" />
      <h5>{bookName}</h5>
      
        <p>{review}</p>
     
      <button className="btn btn-active btn-secondary m-2">Mark as Read</button>
<button className="btn btn-active btn-accent m-2">Add To WishList</button>
    </div>
  );
};

export default BookDetails;
