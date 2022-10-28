import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { datVeAction, layChiTietPhongVeAction } from '../../redux/actions/QuanLyDatVeActions'
import { CheckOutlined, CloseOutlined, UserOutlined ,SmileOutlined,HomeOutlined} from '@ant-design/icons'
import './checkout.css'
import { CHANGE_TAB_ACTIVE, CHUYEN_TAB, DAT_VE } from '../../redux/actions/types/QuanLyDatVeType'
import { sortBy } from 'lodash'
import { ThongTinDatVe } from '../../_core/models/ThongTinDatVe'
import { Tabs } from 'antd';
import { layThongTinNguoiDungAction } from '../../redux/actions/QuanLynguoiDungAction'
import moment from 'moment'
import _ from 'lodash'


function Checkout(props) {
  const {userLogin}=useSelector(state=>state.quanLyNguoiDungReducer)
  const {thongTinNguoiDung}=useSelector(state=>state.quanLyNguoiDungReducer)
  const {chiTietPhongVe,danhSachGheDangDat}=useSelector(state=>state.QuanLyDatVeReducer)
  console.log('danhSachGheDangDat',danhSachGheDangDat)
  const dispatch=useDispatch();
  useEffect(()=>{
    //gọi hàm tạo ra 1 ásync function
    const action=layChiTietPhongVeAction(props.match.params.id);
    //Dispatch function này đi
    dispatch(action)
  },[])
  const {thongTinPhim,danhSachGhe}=chiTietPhongVe

  const renderGhe=()=>{
    return danhSachGhe.map((ghe,index)=>{
      let classGheVip=ghe.loaiGhe==='Vip'?'gheVip':'';
      let classGheDaDat=ghe.daDat===true?'gheDaDat':'';
      let indexGheDangDat=danhSachGheDangDat.findIndex(gheDD=>gheDD.maGhe===ghe.maGhe);
      let classGheDaDuocDat='';
      if(userLogin.taiKhoan===ghe.taiKhoanNguoiDat){
        classGheDaDuocDat='gheDaDuocDat'
      }
      if(indexGheDangDat!=-1){
        classGheDaDat='gheDangDat';
      }
      return <Fragment key={index}>
       
        <button onClick={()=>{
          dispatch({
            type:DAT_VE,
            gheDuocChon:ghe
          })
        }} disabled={ghe.daDat}  className={`${classGheVip} ${classGheDaDat} ${indexGheDangDat} ${classGheDaDuocDat} ghe`}>
          {ghe.daDat?classGheDaDuocDat !=''? <UserOutlined style={{ marginBottom: 7, fontWeight: 'bold' }}/>:<CloseOutlined  style={{ marginBottom: 7, fontWeight: 'bold' }}/>:ghe.stt}
          </button>
        {
          (index+1)%16===0 ? <br/>:''
        }
      </Fragment>
    })
  }
  return (
    <div className='min-h-creen m-5'>
        <div className='grid grid-cols-12'>
              <div className='col-span-9 ml-20'>
                  <div className='flex flex-col items-center mt-5'>
                    <div className='screen'></div>
                    <div className='mt-10'>
                      {renderGhe()}
                    </div>
                  </div>
                  <div className="mt-5 flex justify-center">
                        <table className=" divide-y divide-gray-200 w-2/3">
                            <thead className="p-5">
                                <tr>
                                    <th>Ghế chưa đặt</th>
                                    <th>Ghế đang đặt</th>
                                    <th>Ghế vip</th>
                                    <th>Ghế đã đặt</th>
                                    <th>Ghế mình đặt</th>
                                    <th>Ghế khách đang đặt</th>
                                </tr>
                            </thead>
                            <tbody className=" text-white divide-gray-200">
                                <tr>
                                    <td><button className="ghe text-center"> <CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /> </button> </td>
                                    <td><button className="ghe gheDangDat text-center"> <CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /></button> </td>
                                    <td><button className="ghe gheVip text-center"><CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /></button> </td>
                                    <td><button className="ghe gheDaDat text-center"> <CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /> </button> </td>
                                    <td><button className="ghe gheDaDuocDat text-center"> <CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /> </button> </td>
                                    <td><button className="ghe gheKhachDat text-center"> <CheckOutlined style={{ marginBottom: 7.5, fontWeight: 'bold' }} /> </button> </td>

                                </tr>
                            </tbody>
                        </table>
                </div>
              </div>
              <div className='col-span-3 bg-black text-white p-2'>
                  <h3 className='text-center text-2xl  text-white'>0 đ</h3>
                  <hr/>
                  <h3 className='text-xl text-white'>{thongTinPhim.tenPhim}</h3>
                  <p>{thongTinPhim.tenCumRap}</p>
                  <p>Ngày chiếu: {thongTinPhim.ngayChieu}-{thongTinPhim.gioChieu}</p>
                  <hr/>
                  <div className='flex flex-row my-5'>
                    <div className='w-4/5'>
                      <span className='text-red-400 text-lg'>Số ghế chọn:
                        {sortBy(danhSachGheDangDat,['stt']).map((ghe,index)=>{
                          return <span key={index} className="text-green-600"> {ghe.stt},</span>
                        })}
                      </span>
                    </div>
                    <div className='text-right col-span-1'>
                      <span className='text-white text-lg'>Giá:
                        {danhSachGheDangDat.reduce((tongTien,ghe,index)=>{
                          return tongTien+=ghe.giaVe;
                        },0).toLocaleString()}VNĐ
                      </span>
                    </div>
                  </div>
                  <hr/>
                  <div className='my-5'>
                    <i>Email</i><br/>
                    {userLogin.email}
                  </div>
                  <hr/>
                  <div className='my-5'>
                    <i>Phone</i><br/>
                    {userLogin.soDT}
                  </div>
                  <hr/>
                  <div className='flex flex-col justify-start items-center' style={{marginBottom:0}}>
                     <div onClick={()=>{
                      const thongTinDatVe=new ThongTinDatVe();
                      thongTinDatVe.maLichChieu=props.match.params.id;
                      thongTinDatVe.danhSachve=danhSachGheDangDat;
                      dispatch(datVeAction(thongTinDatVe))
                     }} className='bg-green-500 text-white w-full text-center py-2 font-bold text-2xl cursor-pointer'> ĐẶT VÉ</div>
            </div>
            </div>
           
        </div>
    </div>
  )
}


export default function (props) {
  const {tabActive}=useSelector(state=>state.QuanLyDatVeReducer)
  const {dispatch}=useDispatch();
  return <div className='bg-slate-200 p5'>
    <Tabs defaultActiveKey='1' activeKey={tabActive.toString()} onChange={(key)=>{
    // dispatch({
    //   type:CHANGE_TAB_ACTIVE,
    //   payload:key,
    // })
    }}>
      <Tabs.TabPane tab="01 Chọn Ghế & Thanh Toán" key="1">
          <Checkout {...props}/>
      </Tabs.TabPane>
      <Tabs.TabPane tab="02 Kết quả đặt vé" key="2">
          <KetQuaDatve {...props}/>
      </Tabs.TabPane>
    </Tabs>
  </div>
}
function KetQuaDatve(props){

  const dispatch=useDispatch();
  const {thongTinNguoiDung}=useSelector(state=>state.quanLyNguoiDungReducer)
  useEffect(()=>{
    const action =layThongTinNguoiDungAction();
    dispatch(action)
  
  },[])
  console.log('thongTinNguoiDung',thongTinNguoiDung)

  const renDerTickitItem=()=>{
    return thongTinNguoiDung.thongTinDatVe?.map((ticket,index)=>{
      return <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={index}>
      <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
        <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={ticket.hinhAnh}/>
        <div className="flex-grow">
          <h2 className="text-gray-900 title-font font-medium">{ticket.tenPhim}</h2>
          <p className="text-gray-500">{moment(ticket.ngayDat).format('hh:mm A')}- {moment(ticket.ngayDat).format('DD-MM-YY')}</p>
          <p>Địa điểm:{_.first(ticket.danhSachGhe).tenHeThongRap}-{_.first(ticket.danhSachGhe).tenCumRap}</p>
          <p>Ghế:{ticket.danhSachGhe.map((ghe,index)=>{
            return <span key={index}>[{ghe.tenGhe}]</span>
          })}</p>
        </div>
      </div>
    </div>
    })
  }
  return <div className='p-5'>
    <h3>Kết Quả Đặt vé!</h3>
    <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Lịch sử đặt vé khách hàng</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Hãy xem thông tin để xem phim đúng giờ bạn nhé!!</p>
    </div>
    <div className="flex flex-wrap -m-2">
      {renDerTickitItem()}
      {/* {<div className="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://picsum.photos/200/200" />
          <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">Lật Mặt 48h</h2>
            <p className="text-gray-500">10:10 Rạp 5 DXCenter</p>
          </div>
        </div>
</div>} */}
    </div>
  </div>
</section>

  </div>
}
