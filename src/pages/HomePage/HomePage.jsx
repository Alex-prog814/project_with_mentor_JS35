import React from 'react'
import style from './HomePage.module.css'


const HomePage = () => {
  return (
    <div className={style.homePage}>
      <div className={style.left}>
        <h1 className={style.left__text}>BE YOUR BEST</h1>
        <img className={style.left__image} src='https://logos-world.net/wp-content/uploads/2023/03/Hubba-Bubba-Logo.png' alt='hubba bubba' />
        <a href='#' className={style.mainButton}>
          Explore<span className={style.buttonBorder}></span>
        </a>
      </div>
      <div className={style.right}>
        <div class={style.cardContainer}>
          <div class={style.cardSlide}>
            <div class={style.cardSlideFront}>
              <img
                src="https://content2.rozetka.com.ua/goods/images/big/285926242.jpg" />
            </div>
            <div class={style.cardSlideBack}>
              <h2>Hubba Bubba Bubble Gum Tape</h2>
              <h3>Ingredients:</h3>
              <p>SUGAR, GUM BASE, CORN SYRUP, GLYCEROL; LESS THAN 2% OF: CORN STARCH, SOY LECITHIN, NATURAL AND ARTIFICIAL FLAVORS, ACESULFAME K, ASPARTAME, BHT (TO MAINTAIN FRESHNESS), COLORS (RED 40, RED 40 LAKE).</p>
              <h3>About this item</h3>
              <p>Flavor: Original</p>
              <p>Item Weight: 56 Grams</p>
              <p>Price: $2.5</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HomePage