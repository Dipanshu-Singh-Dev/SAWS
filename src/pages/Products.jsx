import React, { useEffect, useState } from 'react'
import { searchSVG } from "../components/SVGs"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import "../styles/Products.css"
import ProductContainer from '../components/ProductContainer';
import Sort from '../components/Sort';
import Filter from '../components/Filter';

const baseUrl = "https://saws-backend.onrender.com/products";
const Products = () => {
  const [data, setData] = useState();
  const [sort, setSort] = useState("");
  const [order, setOrder] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("")
  const [ratings, setRatings] = useState("");
  const [page, setpage] = useState(1);
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(9);
  const navigate = useNavigate();
  const arr = [1, 2, 3, 4, 5];
  const handleSortChange = (e) => {
    let temp = e.target.value.split(' ');
    setSort(temp[0]);
    setOrder(parseInt(temp[1]));
  }

  const handleAddToWishlist = (e) => {
    e.stopPropagation();
  }

  const handleAddToCart = (e, id) => {
    e.stopPropagation();
  }

  useEffect(() => {
    const url = `${baseUrl}?${category ? "category=" + category : ""}${
      page ? "&page=" + page : ""
    }${brand ? "&brand=" + brand : ""}${ratings ? "&rating=" + ratings : ""}${
      sort ? "&sort=" + sort : ""
    }${order ? "&order=" + order : ""}`;
    console.log(url)
    axios.get(url)
    .then((res) => setData(res.data))
    .catch(err=>console.error(err));
  }, [page, category, brand, ratings, sort,order])
  return (
    <div className="products_container">
      <div className='sortNFilter'>
        <Filter
          setCategory={setCategory}
          setBrand={setBrand}
          setRatings={setRatings}
        />
        <Sort handleSortChange={handleSortChange} />
      </div>
      <div className="products_body">
        <div className="products_data">
          {data?.map(
            (
              {
                url,
                image,
                rating,
                name: title,
                MRP: price,
                price: discountPrice,
              },
              i
            ) => {
              return (
                <ProductContainer
                  key={url}
                  url={url}
                  img={image}
                  rating={rating}
                  title={title}
                  price={price}
                  discountPrice={discountPrice}
                />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}

export default Products