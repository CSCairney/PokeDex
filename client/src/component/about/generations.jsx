import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function GenerationsCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://e.snmc.io/lk/lv/x/1c8bc67c2b40f607228eee2ecbefe96b/8499307"
          alt="Pokemon Red and Blue"
        />
        <Carousel.Caption>
          <h3>Pokemon Red and Blue</h3>
          <p>Released - 1996</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/game_boy_4/H2x1_GB_PokemonYellow_enGB_image1600w.jpg"
          alt="Pokemon Yellow"
        />

        <Carousel.Caption>
          <h3>Pokemon Yellow</h3>
          <p>Released - 1998</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/game_boy_color_5/H2x1_GBC_PokemonSilver_enGB_image1600w.jpg"
          alt="Pokemon Silver"
        />

        <Carousel.Caption>
          <h3>Pokemon Silver</h3>
          <p>Released - 1999</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/game_boy_color_5/H2x1_GBC_PokemonCrystal_enGB_image1600w.jpg"
          alt="Pokemon Crystal"
        />

        <Carousel.Caption>
          <h3>Pokemon Crystal</h3>
          <p>Released - 2000</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

render(<GenerationsCarousel />);