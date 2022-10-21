import React, { useEffect, useState } from 'react'
import './Detail.css'
import '../../assets/circle.css'
import { Tabs } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { SET_CHI_TIET_PHIM } from '../../redux/actions/types/quanLyRapType';
import { layThongTinChiTietPhim } from '../../redux/actions/quanLyRapAction';
import moment from 'moment';
import { StarOutline } from 'antd-mobile-icons'

const Detail = (props) => {

  const { filmDetail } = useSelector(state => state.quanLyPhimReducer)
  console.log("filmDetail: ", filmDetail);

  const dispatch = useDispatch()

  useEffect(() => {
    //Lấy thông tin params từ url
    let { id } = props.match.params
    // console.log("id: ", id);
    dispatch(layThongTinChiTietPhim(id))
  }, [])

  const [tabPosition] = useState('left');
  return (
    <div style={{ backgroundImage: `url(${filmDetail.hinhAnh})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
      {/* Phần background mờ */}
      <div className='glassBackground' style={{ paddingTop: 150, minHeight: '100vh' }}>
        <div className="grid grid-cols-12">
          <div className="col-span-5 col-start-3">
            <div className='grid grid-cols-2'>
              <img src={filmDetail.hinhAnh} alt={filmDetail.tenPhim} />
              <div className='flex items-center'>
                <div className='ml-2 text-white'>
                  <p>Ngày chiếu: <span className='text-green-400'>{moment(filmDetail.ngayKhoiChieu).format('DD-MM-YYYY hh:mm A')}</span></p>
                  <p className='text-2xl font-bold'>{filmDetail.tenPhim}</p>
                  <p>{filmDetail.moTa}</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-4 flex items-center justify-center flex-col-reverse'>
            {/* Phần 'rating circle' */}
            <h1 className='text-3xl text-green-400 flex justify-center items-center mr-10'><StarOutline /><StarOutline /><StarOutline /></h1>
            <div className={`c100 p${(filmDetail.danhGia)*10} big`}>
              <span>{(filmDetail.danhGia)*10}%</span>
              <div className="slice">
                <div className="bar" />
                <div className="fill" />
              </div>
            </div>
          </div>
        </div>
        <div className='mt-20 container'>
          <Tabs
            tabPosition={tabPosition}
            items={new Array(3).fill(null).map((_, i) => {
              const id = String(i + 1);
              return {
                label: `Tab ${id}`,
                key: id,
                children: `Content of Tab ${id}`,
              };
            })}
          />
        </div>
      </div>
    </div>
  )
}

export default Detail