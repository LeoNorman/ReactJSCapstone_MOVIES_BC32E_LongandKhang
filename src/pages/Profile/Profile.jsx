import { Tabs } from 'antd';
import { ArrowLeftOutlined, } from '@ant-design/icons'
import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { history } from '../../App'
import { quanLyNguoiDungAction } from '../../redux/actions/quanLyNguoiDungAction'
import { GROUPID } from '../../util/settings/config'


const InforUser = (props) => {
  const { userLogin } = useSelector(state => state.quanLyNguoiDungReducer)
  const { thongTinUserEdit } = useSelector(state => state.quanLyNguoiDungReducer)
  console.log("thongTinUserEdit: ", thongTinUserEdit);

  const dispatch = useDispatch()

  useEffect(() => {
    const action = quanLyNguoiDungAction.layThongTinUserEditAction(userLogin.taiKhoan)
    dispatch(action)
  }, [])

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      taiKhoan: thongTinUserEdit.taiKhoan,
      matKhau: thongTinUserEdit.matKhau,
      email: thongTinUserEdit.email,
      soDt: thongTinUserEdit.soDT,
      maNhom: thongTinUserEdit.maNhom,
      maLoaiNguoiDung: thongTinUserEdit.maLoaiNguoiDung,
      hoTen: thongTinUserEdit.hoTen,
    },
    onSubmit: values => {
      console.log("values: ", values);
      if(window.confirm('Bạn có chắc muốn lưu thay đổi này?')) {
        const action = quanLyNguoiDungAction.capNhatThongTinUserAction(values)
        dispatch(action)
      }
    },
  })


  return (
      <form onSubmit={
        formik.handleSubmit
      } className="w-full px-5 md:px-10">
        <div className="mb-10">
          <h1 className="font-bold text-3xl text-gray-900">Chỉnh sửa người dùng</h1>
        </div>
        <div className='grid lg:grid-cols-2'>
          <div className="flex -mx-3 mr-2">
            <div className="w-full px-3 mb-5">
              <label htmlFor='true' className="text-xs font-semibold px-1">Tài khoảng</label>
              <div className="flex">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg" /></div>
                <input type="text" disabled name='taiKhoan' onChange={formik.handleChange} value={formik.values.taiKhoan} className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Nhập tài khoảng" />
              </div>
            </div>
          </div>
          <div className="flex -mx-3">
            <div className="w-full px-3 mb-5">
              <label htmlFor='true' className="text-xs font-semibold px-1">Email</label>
              <div className="flex">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg" /></div>
                <input type="email" name='email' onChange={formik.handleChange} value={formik.values.email} className="text-black w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="nguyenvana@gmail.com" />
              </div>
            </div>
          </div>
          <div className="flex -mx-3 mr-2">
            <div className="w-full px-3 mb-5">
              <label htmlFor='true' className="text-xs font-semibold px-1">Mật khẩu</label>
              <div className="flex">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg" /></div>
                <input type="password" name='matKhau' onChange={formik.handleChange} value={formik.values.matKhau} className="text-black w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Nhập mật khẩu" />
              </div>
            </div>
          </div>
          <div className="flex -mx-3">
            <div className="w-full px-3 mb-5">
              <label htmlFor='true' className="text-xs font-semibold px-1">Họ tên</label>
              <div className="flex">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg" /></div>
                <input type="text" name='hoTen' onChange={formik.handleChange} value={formik.values.hoTen} className="text-black w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="nguyenvana@gmail.com" />
              </div>
            </div>
          </div>
          <div className="flex -mx-3 mr-2">
            <div className="w-full px-3 mb-12">
              <label htmlFor='true' className="text-xs font-semibold px-1">Số điện thoại</label>
              <div className="flex">
                <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg" /></div>
                <input type="tel" name='soDt' onChange={formik.handleChange} value={formik.values.soDt} className="text-black w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************" />
              </div>
            </div>
          </div>
          <div className="flex -mx-3 mt-5">
            <div className="w-1/2 px-3 mb-5">
              <button type='submit' className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">Lưu</button>
            </div>
          </div>
        </div>
      </form>
  )
}


const Profile = (props) => {
  return (
    <div className='pt-20 px-5 bg-black h-screen'>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="THÔNG TIN CÁ NHÂN" key="1">
          <InforUser {...props} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="LỊCH SỬ ĐẶT VÉ" key="2">
          <LichSuDatVe {...props} />
        </Tabs.TabPane>
      </Tabs>
    </div>
  )
}

export default Profile

const LichSuDatVe = (props) => {
  return (
    <div>LichSuDatVe</div>
  )
}