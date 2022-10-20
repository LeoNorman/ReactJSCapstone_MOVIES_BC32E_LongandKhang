import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HomeMenu from './HomeMenu/HomeMenu'
import { quanLyPhimReducer } from '../../redux/reducers'
import Film from '../../components/Film/Film'
import MultipleRowSlick from '../../components/ReactSlick/MultipleRowSlick'
import { layDanhSachPhimAction } from '../../redux/actions/quanLyPhimAction'
import { layDanhSachHeThongCumRapAcTion } from '../../redux/actions/quanLyRapAction'

const Home = () => {
  const { arrFilm } = useSelector(state => state.quanLyPhimReducer)
  const dispath = useDispatch()
  const {heThongRapChieu} = useSelector(state => state.quanLyRapReducer)
  // console.log("arrFilm: ", arrFilm);

  // const renderFilm = () => {
  //   return arrFilm.map((phim, index) => {
  //     return <Film key={index} />

  //   })
  // }
  useEffect(() => {
    const action = layDanhSachPhimAction()
    dispath(action) // dispatch function từ redux THUNK
    dispath(layDanhSachHeThongCumRapAcTion())
  }, [])

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
        <HomeMenu heThongRapChieu={heThongRapChieu} />
      </div>

    </div>
  )
}

export default Home