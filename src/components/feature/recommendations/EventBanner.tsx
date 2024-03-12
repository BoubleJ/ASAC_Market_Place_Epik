'use client'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Image from 'next/image'
import React, { Component } from 'react'
import Slider from 'react-slick'

const eventImages = [
  // '/images/vegetables.avif',
  // '/images/ice-cream.avif',
  // '/images/raspberries.avif',
  'https://cdn.pixabay.com/photo/2015/05/04/10/16/vegetables-752153_1280.jpg',
  'https://cdn.pixabay.com/photo/2016/03/23/15/00/ice-cream-1274894_1280.jpg',
  'https://cdn.pixabay.com/photo/2017/01/31/09/30/raspberries-2023404_1280.jpg',
]

export default class EventBanner extends Component {
  state = {
    activeSlide: 0,
  }
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      afterChange: (current: any) => this.setState({ activeSlide: current }),
    }
    return (
      <div className="relative h-80">
        <Slider {...settings}>
          {eventImages.map((eventImage, index) => (
            <Image
              key={index}
              src={eventImage}
              alt="event banner image"
              width={300}
              height={300}
              // priority={index === 0}
              // placeholder="blur"
              className="h-80 w-full object-fill"
            />
          ))}
        </Slider>
        <div className="absolute bottom-4 right-4 flex h-6 w-14 items-center justify-center rounded-full bg-black bg-opacity-50">
          <p className="text-xs font-thin text-white">
            {this.state.activeSlide + 1} / {eventImages.length}
          </p>
        </div>
      </div>
    )
  }
}
