import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div>
            <section className='banner'>
                <div className='banner-text d-flex flex-column align-items-center h-100'>
                    <h1 className='mb-4'>Best Food waiting For Your Belly</h1>
                    <div className='search-area'>
                        <input type="text" name="text" id="search" className='search-input rounded-pill ps-3' placeholder='Search Food Items Here...'/>
                        <button className='search-btn rounded-pill px-4 position-absolute fw-bold'>Search</button>
                    </div>
                    
                  
                </div>
            </section>
        </div>
    );
};

export default Home;