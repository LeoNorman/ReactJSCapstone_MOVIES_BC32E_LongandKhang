import { Carousel } from 'antd';
import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';


export default function HomeCarousel(props) {

  const {arrImg}=useSelector(state=>state.carouselReducer)
  
  const dispatch=useDispatch();
  const contentStyle= {
    height: '900px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    backgroundPosition:'center',
    backgroundSize:'100%',
    backgroundRepeat:'no-repeat'
  };
  useEffect(async ()=>{
    try{
      const result = await axios({
        url:'https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachBanner',
        method:'GET',
        headers:{
          TokenCyberSoft:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAzMkUiLCJIZXRIYW5TdHJpbmciOiIyMC8wMy8yMDIzIiwiSGV0SGFuVGltZSI6IjE2NzkyNzA0MDAwMDAiLCJuYmYiOjE2NTA0NzQwMDAsImV4cCI6MTY3OTQxODAwMH0.S7l5kogAVJjRW8mjJ5gosJraYq5ahYjrBwnMJAaGxlY'
        }
      });
      //đưa lên reducer
      //console.log('first',result)
      dispatch({
        type:'SET_CAROUSEL',
        arrImg:result.data.content
      })
    }catch(errors){
      console.log('errors',errors)
    }
  },[])
  const renderImg=()=>{
    return arrImg.map((item,index)=>{
      return <div key={index}>
        <div style={{...contentStyle,backgroundImage:`url(${item.hinhAnh})`}}>
          <img src={item.hinhAnh} className="w-full opacity-0" alt="123"/>
        </div>
      </div>
    })
  }
  return (
    <div>
      <Carousel effect="fade">
      {renderImg()}
  </Carousel>
    </div>
  )
}
