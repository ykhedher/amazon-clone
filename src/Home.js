import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
   return (
      <div className='home'>
         <div className="home__container">
            <img
               className="home__image"
               src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_FT_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB408004054_.jpg"
               alt="Home"
            />
            <div className="home__row">
               <Product
                  id="1"
                  title='iPhone 11 Green'
                  price={799}
                  image="https://images-na.ssl-images-amazon.com/images/I/71Dh%2BNR7ivL._AC_SX466_.jpg"
                  rating={4}
               />
               <Product
                  id="2"
                  title='MacBook Pro 16'
                  price={2399}
                  image="https://images-na.ssl-images-amazon.com/images/I/71L2iBSyyOL._AC_SX466_.jpg"
                  rating={3}
               />
            </div>
            <div className="home__row">
               <Product
                  id="3"
                  title='GoPro'
                  price={299}
                  image="https://images-na.ssl-images-amazon.com/images/I/51CDZ2fymtL._AC_SX425_.jpg"
                  rating={3}
               />
               <Product
                  id="4"
                  title='Airpods Pro'
                  price={269}
                  image="https://images-na.ssl-images-amazon.com/images/I/71zny7BTRlL._AC_SX466_.jpg"
                  rating={4}
               />
               <Product
                  id="5"
                  title='Monitor Ultrawide'
                  price={499}
                  image="https://images-na.ssl-images-amazon.com/images/I/41RhaAYMC9L._AC_SY355_.jpg"
                  rating={3} />
            </div>
            <div className="home__row">
               <Product
                  id="6"
                  title='Apple Watch Serie 5'
                  price={499}
                  image="https://images-na.ssl-images-amazon.com/images/I/71j0Ezz6PnL._AC_SX466_.jpg"
                  rating={3}
               />
            </div>
         </div>
      </div>
   )
}

export default Home
