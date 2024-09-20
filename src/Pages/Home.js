import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import myImage from '../Images/yey.png';
import { useCart } from '../Components/CartContext'; 

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const { addToCart } = useCart(); 

  useEffect(() => {
    
    axios.get('https://fakestoreapi.com/products/categories')
      .then(response => setCategories(response.data))
      .catch(error => console.error("Error fetching categories:", error));

    
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        
        const shuffled = response.data.sort(() => 0.5 - Math.random());
        setFeaturedProducts(shuffled.slice(0, 15));
      })
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  
  const getCategoryImage = (category) => {
    const images = {
      electronics: 'https://via.placeholder.com/300x200?text=Electronics',
      jewelery: 'https://via.placeholder.com/300x200?text=Jewelry',
      men: 'https://via.placeholder.com/300x200?text=Men%27s+Clothing',
      women: 'https://via.placeholder.com/300x200?text=Women%27s+Clothing'
    };
    return images[category] || 'https://via.placeholder.com/300x200?text=Category';
  };

  
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,        
    autoplaySpeed: 3000, 
    
  };

  return (
    <div className='container' style={{overflow: 'hidden'}}>
      <header className='header'>
        <div className='hero-image'>
          <img src={myImage} alt='Hero' className=' container-fluid'/>
          
          <div className='hero-content'>
            <h1>Welcome to Our Store</h1>
            <p>Your one-stop shop for the best products</p>
            <Link to='/product' className='btn btn-primary'>Shop Now</Link>
          </div>
        </div>
      </header>

      <section className='carousel'>
        <h2>Featured Carousel</h2>
        <Slider {...carouselSettings}>
          {featuredProducts.map(product => (
            <div key={product.id} className='carousel-item'>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <div className='carousel-buttons'>
                <button 
                  className='btn btn-success'
                  onClick={() => addToCart(product)} // Add to Cart functionality
                >
                  Add to Cart
                </button>
                <Link to='/product' className='btn btn-primary'>Shop More</Link>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      <section className='categories'>
        <h2>Shop by Category</h2>
        <div className='category-grid row'>
          {categories.map(category => (
            <div key={category} className='category-card col-lg-3'>
              <Link to={`/product`} className='category-link'>
                <img src={getCategoryImage(category)} alt={category} />
                <h3>{category}</h3>
                <p>Explore {category}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className='featured-products'>
        <h2>Featured Products</h2>
        <div className='product-grid'
        >
          {featuredProducts.map(product => (
            <div key={product.id} className='product-card'>
              <img src={product.image} alt={product.title} />
              <div className='product-info'>
                <h5 style={{}} className=' mt-2'>{product.title}</h5>
                <p>${product.price}</p>
                <div className='product-buttons'>
                  <button 
                    className='btn btn-success'
                    onClick={() => addToCart(product)} 
                  >
                    Add to Cart
                  </button>
              
                  <Link to='/product' className='btn btn-primary'>See More</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
