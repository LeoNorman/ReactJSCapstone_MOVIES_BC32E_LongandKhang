import React from 'react'
import { useSelector } from 'react-redux'
import HomeMenu from './HomeMenu/HomeMenu'
import { quanLyPhimReducer } from '../../redux/reducers'
import Film from '../../components/Film/Film'
import MultipleRowSlick from '../../components/ReactSlick/MultipleRowSlick'

const Home = () => {

  const { arrFilm } = useSelector(state => state.quanLyPhimReducer)
  // console.log("arrFilm: ", arrFilm);

  // const renderFilm = () => {
  //   return arrFilm.map((phim, index) => {
  //     return <Film key={index} />

  //   })
  // }

  return (
    <div>
      {/* thư viện tailblocks.cc */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <MultipleRowSlick arrFilm={arrFilm} />
          {/* <div className="flex flex-wrap justify-center -m-4">
            {renderFilm()}
          </div> */}
        </div>
      </section>

      <div className='mx-36'>
        <HomeMenu />
      </div>

    </div>
  )
}

export default Home