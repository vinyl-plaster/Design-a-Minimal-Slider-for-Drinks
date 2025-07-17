import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Navigation, Pagination } from 'swiper/modules'

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'


import { drinks } from './data' 

import './App.scss'

function App() {

  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      slidesPerView={1}
      grabCursor
      navigation
      pagination={{ clickable: true, type: 'fraction' }}
    >
      {drinks.map((drink, key) => (
        <SwiperSlide key={key}>

          <div className="swiper-slide__left">
            <div className="swiper-slide__left__tag hide">{drink.tag}</div>
            <div className="swiper-slide__left__desc hide">
              <h2 className='hide'>{drink.title}</h2>
              <p className='hide'>{drink.description}</p>
              <a className='hide' href="">
                Read More
                <img src="/icons/read_me_icon.svg" alt="Read me icon" />
              </a>
            </div>
          </div>

          <div className="swiper-slide__center hide">
            <img src={drink.image_path} alt={drink.title} />
          </div>

        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default App
