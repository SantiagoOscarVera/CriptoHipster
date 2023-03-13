import React from "react";
import OwlCarousel from "react-owl-carousel";
import Heading from "./Heading";

const TopNfts = [
  {
    id: "1",
    name: "Bitcoin (BTC)",
    price: "Volátil",
    image: "/images/btc10.jpg",
  },
  {
    id: "2",
    name: "Ether (ETH)",
    price: "Volátil",
    image: "/images/eth.jpg",
  },
  {
    id: "3",
    name: "Tether (USDT)",
    price: "Stablecoin",
    image: "/images/usdt.jpg",
  },
  {
    id: "4",
    name: "Binance USD (BUSD)",
    price: "Stablecoin",
    image: "/images/busd.jpg",
  },
  {
    id: "5",
    name: "Algorand (ALGO)",
    price:  "Volátil",
    image: "/images/algo.jpg",
  },
  {
    id: "6",
    name: "Dogecoin (DOGE)",
    price:  "Volátil",
    image: "/images/doge.jpg",
  },
  {
    id: "7",
    name: "Decentraland (MANA)",
    price:  "Volátil",
    image: "/images/mana.jpg",
  },
  {
    id: "8",
    name: "Cardano (ADA)",
    price:  "Volátil",
    image: "/images/cardano.jpg",
  },
];

function TopNFT() {
  return (
    <div className="my-12">
      <Heading title={"TOP CRIPTO´S"} />
      <OwlCarousel
        className="owl-theme"
        loop
        autoplay={true}
        autoplaySpeed={2000}
        smartSpeed={1000}
        autoplayTimeout={3000}
        responsive={{
          0: {
            margin: 2,
            items: 1,
          },
          640: {
            items: 2,
            margin: 10,
          },
          1024: {
            items: 3,
            margin: 20,
          },
          1536: {
            items: 4,
            margin: 30,
          },
        }}
      >
        {TopNfts.map((t) => (
          <div
            key={t.id}
            className="top-hover relative border-8 border-subLightMain pb-5 bg-subMain flex-colo"
          >
            <div className="relative w-full">
              <img
                src={t.image}
                alt={t.name}
                className="w-full h-64 object-cover"
              />
              <div className="top-hidden absolute transitione top-1 bottom-1 left-1 right-1 bg-overlay flex-colo">
                <h2 className="mt-2 text-lg font-black tracking-wider text-whites">{t.name}</h2>
                <div className= "font-semibold text-whites">
                  {t.price}
                </div>
              </div>
            </div>

            <button className="px-6 text-whites tracking-wide py-3 mt-5 bt-linear font-bold text-sm rounded">
              Read More
            </button>
          </div>
        ))}
      </OwlCarousel>
    </div>
  );
}

export default TopNFT;
