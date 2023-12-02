import React from 'react'
import { Link } from 'react-router-dom';
const Filter = ({ setCategory, setBrand, setRatings }) => {
  return (
    <div className="products_head">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Products
          </li>
        </ol>
      </nav>
      <h3>Filters</h3>
      <hr />
      <div className="filters" id="Category">
        <p
          className="gap-1 filter_head"
          style={{ display: "flex", marginBottom: "-10px" }}
        >
          <a
            className="filter_button"
            data-bs-toggle="collapse"
            href="#collapseExample1"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Category
          </a>
        </p>
        <div className="open" id="collapseExample1">
          <div
            className="form-check"
            style={{ display: "flex" }}
            onClick={() => {
              setCategory("Headphone");
            }}
          >
            <input
              className="form-check-input"
              type="radio"
              name="flexRadio"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              HeadPhones
            </label>
          </div>

          <div
            className="form-check"
            style={{ display: "flex" }}
            onClick={() => {
              setCategory("Smartphone");
            }}
          >
            <input
              className="form-check-input"
              type="radio"
              name="flexRadio"
              id="flexRadioDefault2"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Mobiles
            </label>
          </div>
          <div
            className="form-check"
            style={{ display: "flex" }}
            onClick={() => {
              setCategory("Laptop");
            }}
          >
            <input
              className="form-check-input"
              type="radio"
              name="flexRadio"
              id="flexRadioDefault3"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault3">
              Laptops
            </label>
          </div>
          <div
            className="form-check"
            style={{ display: "flex" }}
            onClick={() => {
              setCategory("");
            }}
          >
            <input
              className="form-check-input"
              type="radio"
              name="flexRadio"
              id="flexRadioDefault4"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault4">
              All
            </label>
          </div>
        </div>
      </div>
      <hr />
      {/* <div className="filters" id="Brands">
        <p
          className="gap-1 filter_head"
          style={{ display: "flex", marginBottom: "-10px" }}
        >
          <a
            className="filter_button"
            data-bs-toggle="collapse"
            href="#collapseExample2"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Brands
          </a>
        </p>
        <div className="open" id="collapseExample2">
          <div
            className="form-check"
            style={{ display: "flex" }}
            onClick={() => {
              setBrand("Apple");
            }}
          >
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="option1"
            />
            <label className="form-check-label" htmlFor="exampleRadios1">
              Apple
            </label>
          </div>
          <div
            className="form-check"
            style={{ display: "flex" }}
            onClick={() => {
              setBrand("Motorola");
            }}
          >
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              value="option2"
            />
            <label className="form-check-label" htmlFor="exampleRadios2">
              Motorola
            </label>
          </div>
          <div
            className="form-check"
            style={{ display: "flex" }}
            onClick={() => {
              setBrand("Samsung");
            }}
          >
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios3"
              value="option3"
            />
            <label className="form-check-label" htmlFor="exampleRadios3">
              Samsung
            </label>
          </div>
          <div
            className="form-check"
            style={{ display: "flex" }}
            onClick={() => {
              setBrand("Pixel");
            }}
          >
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios4"
              value="option4"
            />
            <label className="form-check-label" htmlFor="exampleRadios4">
              Pixel
            </label>
          </div>
          <div
            className="form-check"
            style={{ display: "flex" }}
            onClick={() => {
              setBrand("");
            }}
          >
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios5"
              value="option4"
            />
            <label className="form-check-label" htmlFor="exampleRadios5">
              Reset
            </label>
          </div>
        </div>
      </div> */}

      <hr />
      <div className="filters" id="Ratings">
        <p
          className="gap-1 filter_head"
          style={{ display: "flex", marginBottom: "-10px" }}
        >
          <a
            className="filter_button"
            data-bs-toggle="collapse"
            href="#collapseExample3"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Customer Ratings
          </a>
        </p>
        <div className="open" id="collapseExample3">
          <div
            className="form-check"
            style={{ display: "flex" }}
            onClick={() => {
              setRatings("4");
            }}
          >
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault11"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault11">
              4 Stars & Above
            </label>
          </div>
          <div
            className="form-check"
            style={{ display: "flex" }}
            onClick={() => {
              setRatings("3");
            }}
          >
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault21"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault21">
              3 Stars & Above
            </label>
          </div>
          <div
            className="form-check"
            style={{ display: "flex" }}
            onClick={() => {
              setRatings("2");
            }}
          >
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault31"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault31">
              2 Stars & Above
            </label>
          </div>
          <div
            className="form-check"
            style={{ display: "flex" }}
            onClick={() => {
              setRatings("1");
            }}
          >
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault41"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault41">
              1 Star & Above
            </label>
          </div>
          <div
            className="form-check"
            style={{ display: "flex" }}
            onClick={() => {
              setRatings("");
            }}
          >
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault51"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault51">
              Reset
            </label>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Filter