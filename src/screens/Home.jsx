 import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

export default function Home() {
  const [search, setSearch] = useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "Post",
      headers: {
        'Content-Type': 'application/json'
      }
    });
    response = await response.json();
    setFoodItem(response[0]);
    setFoodCat(response[1]);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
      <Navbar />
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://source.unsplash.com/random/900x400/?burger" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="Burger" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Find Your Favorite Foods</h5>
              <input
                className="form-control my-3"
                type="search"
                placeholder="Search for food..."
                aria-label="Search"
                value={search}
                onChange={(e) => { setSearch(e.target.value) }}
                style={{
                  border: "5px solid black",
                  borderRadius: "5px",
                }}
              />
            </div>
          </div>
          {/* Additional carousel items */}
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/900x400/?pastry" className="d-block w-100 carousel-image" style={{ filter: "brightness(30%)" }} alt="Pastry" />
            <div className="carousel-caption d-none d-md-block">
              <input
                className="form-control my-3 carousel-search"
                type="search"
                placeholder="Search for food..."
                aria-label="Search"
                value={search}
                onChange={(e) => { setSearch(e.target.value) }}
              />
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/900x400/?barbeque" className="d-block w-100 carousel-image" style={{ filter: "brightness(30%)" }} alt="Barbeque" />
            <div className="carousel-caption d-none d-md-block">
              <input
                className="form-control my-3 carousel-search"
                type="search"
                placeholder="Search for food..."
                aria-label="Search"
                value={search}
                onChange={(e) => { setSearch(e.target.value) }}
              />
            </div>
          </div>
        </div>
        {/* Carousel control buttons */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className='container'>
        {foodCat.length !== 0
          ? foodCat.map((data) => (
            <div className='row mb-3' key={data._id}>
              <div className='fs-3 m-3' style={{ color: 'white' }}>{data.CategoryName}</div>
              <hr style={{ backgroundColor: 'white' }}/>
              {foodItem.length !== 0
                ? foodItem.filter((item) => (
                  item.CategoryName === data.CategoryName &&
                  item.name.toLowerCase().includes(search.toLowerCase())
                ))
                  .map(filteritems => (
                    <div className="col-12 col-md-6 col-lg-3" key={filteritems._id}>
                      <Card foodItem={filteritems} options={filteritems.options[0]} />
                    </div>
                  ))
                : <div style={{ color: 'white' }}>"NO DATA"</div>
              }
            </div>
          ))
          : ""
        }
      </div>
      <Footer />
    </div>
  );
}
