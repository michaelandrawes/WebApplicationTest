import React, { useState } from "react";
import { getBooks } from "../functions/book";
import CardInfo from "./CardInfo";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { paginate } from "../pagination/pagination.js";
import Pagination from "../pagination/Pagination.jsx";
const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [books, setBooks] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getPageData = () => {
    const paginationData = paginate(books, currentPage, pageSize);
    return { totalCount: books.length, data: paginationData };
  };

  const { totalCount, data } = getPageData();

  const dispatch = useDispatch();

  const handelSearch = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    getBooks(e.target.value)
      .then((res) => {
        setBooks(res.data.items);
        console.log(res.data.items);
        dispatch({
          type: "BOOKS",
          books: res.data.items,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-8 offset-2">
          <TextField
            value={searchInput}
            onChange={handelSearch}
            className="col-12 mt-5"
            label="Search "
            InputProps={{
              type: "search",
            }}
          />
        </div>
      </div>
      <div className="row mt-4">
        {data.map((b, index) => {
          return (
            <div key={index} className="col-12 col-md-4 col-lg-4 mt-3">
              <CardInfo
                title={b.volumeInfo.title.substring(0, 50) + `...`}
                img={
                  b.volumeInfo.imageLinks && b.volumeInfo.imageLinks.thumbnail
                }
                desc={
                  b.volumeInfo.subtitle &&
                  b.volumeInfo.subtitle.substring(0, 30) + `...`
                }
                infoLink={b.volumeInfo.infoLink}
              />
            </div>
          );
        })}
      </div>
      <br />
      <Pagination
        itemsCount={totalCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      <br />
    </div>
  );
};

export default Home;
