import React from "react";
import { assets } from "../assets/assets";
import { cities } from "../assets/assets";

const Hero = () => {
  return (
    <div
      className='relative flex flex-col items-start justify-center px-6 md:px-16 
    lg:px-24 xl:px-32 text-white bg-[url("/src/assets/heroNew.webp")] 
    bg-no-repeat bg-cover bg-center h-screen'
    >
      {/* Background Dark Overlay Layer */}
      <div className="absolute inset-0 bg-black/35 z-0" />

      {/* Wrap your text content in a div with z-10 so it stays above the overlay */}
      <div className="relative z-10 max-w-3xl space-y-6 mt-12">
        <span className="bg-[#49b9ff]/50 px-3.5 py-1 rounded-full mt-20">
          The Ultimate Hotel and Tour Guide Experience
        </span>

        <h1
          className="font-playfair text-2xl md:text-5xl md:text-[66px] 
        md:leading-[56px] font-bold md:front-extrabold max-w-2xl mt-4"
        >
          Discover Your Perfect Gateway Destination
        </h1>

        <p className="max-w-130 text-white mt-2 text-sm md:text-base">
          Unparalleled luxury and comfort await at the world's most exclusive
          hotels and resorts. Travel anywhere, anytime with our incredible
          travel guides.
        </p>

        {/**hotel booking form section */}
        <form className="bg-white text-gray-500 rounded-lg mt-8 
        flex flex-col md:flex-row max-md:items-start p-3 gap-4 max-md:mx-auto">
          <div>
            <div className="flex items-center gap-2">
              <img src={assets.calendarIcon} className="h-4" />
              <label htmlFor="destinationInput">Destination</label>
            </div>
            <input
              list="destinations"
              id="destinationInput"
              type="text"
              className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
              placeholder="Type here"
              required
            />
            <datalist id="destinations">
              {cities.map((city, index) => (
                <option value={city} key={index} />
              ))}
            </datalist>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <img src={assets.calenderIcon} className="h-4" />
              <label htmlFor="checkIn">Check in</label>
            </div>
            <input
              id="checkIn"
              type="date"
              className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
            />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <img src={assets.calenderIcon} className="h-4" />

              <label htmlFor="checkOut">Check out</label>
            </div>
            <input
              id="checkOut"
              type="date"
              className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
            />
          </div>

          <div className="flex md:flex-col max-md:gap-2 max-md:items-center">
            <label htmlFor="guests">Guests</label>
            <input
              min={1}
              max={4}
              id="guests"
              type="number"
              className=" rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none  max-w-16"
              placeholder="0"
            />
          </div>

          <button className="flex items-center justify-center gap-0.5 rounded-md bg-black py-2 px-4 pl-2 text-white my-auto cursor-pointer max-md:w-full max-md:py-1">
            <img src={assets.searchIcon} className="h-6 w-6" />

            <span>Search</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
