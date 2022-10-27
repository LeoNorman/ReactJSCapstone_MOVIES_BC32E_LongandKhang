import { Divider, Radio, Space, Tabs } from "antd";
import moment from "moment";
import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";

const HomeMenu = (props) => {
  const { hethongrapchieu } = props;
  // console.log("heThongRapChieu: ", heThongRapChieu);

  const [tabPosition, setTabPosition] = useState("left");
  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };

  return (
    //dùng thư viện antdesign, gõ từ khóa 'tabs'
    <>
      <Tabs
        hethongrapchieu={hethongrapchieu}
        tabPosition={tabPosition}
        items={hethongrapchieu.map((hethongrap, i) => {
          const id = String(i + 1);
          return {
            label: (
              <img
                src={hethongrap.logo}
                className="rounded-full"
                width={50}
                alt={`${id}`}
                key={`${id}`}
              />
            ),
            key: id,
            children: (
              <Tabs
                hethongrap={hethongrap}
                tabPosition={tabPosition}
                // Phần Hệ Thống Rạp
                items={hethongrap.lstCumRap?.map((cumRap, index) => {
                  return {
                    label: (
                      <div
                        className="flex"
                        style={{ width: "400px" }}
                        key={index}
                      >
                        <img
                          src={cumRap.hinhAnh}
                          alt={`${index}`}
                          style={{ width: "50px", height: "50px" }}
                          key={index}
                        />
                        <br />
                        <div className="ml-2 text-left">
                          <p>{cumRap.tenCumRap}</p>
                          <p>{cumRap.diaChi}</p>
                        </div>
                        <hr />
                      </div>
                    ),
                    key: index,
                    //Phần Cụm Rạp
                    children: (
                      <div>
                        {cumRap.danhSachPhim?.slice(0, 5).map((phim, index) => {
                          return (
                            <Fragment key={index}>
                              <div className="my-5">
                                <div className="flex">
                                  {/* Do có 1 số hình bị lỗi nên tạm dùng onError */}
                                  {/* search từ khóa: 'onerror image react' */}
                                  <img
                                    src={phim.hinhAnh}
                                    width={75}
                                    style={{ height: "75px" }}
                                    alt={phim.tenPhim}
                                    onError={(e) =>
                                      (e.target.onerror = null)(
                                        (e.target.src =
                                          "https://picsum.photos/75/75")
                                      )
                                    }
                                  />
                                  <div className="ml-2">
                                    <h3 className="ml-2 text-lg text-green-700">
                                      {phim.tenPhim}
                                    </h3>
                                    <div className="grid grid-cols-3 gap-2">
                                      {phim.lstLichChieuTheoPhim
                                        ?.slice(0, 12)
                                        .map((lichChieu, index) => {
                                          return (
                                            <NavLink
                                              className="ml-2 text-xs text-orange-500"
                                              to={`/checkout/${lichChieu.maLichChieu}`}
                                              key={index}
                                            >
                                              {moment(
                                                lichChieu.ngayChieuGioChieu
                                              ).format("hh:mm A")}
                                            </NavLink>
                                          );
                                        })}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <hr />
                            </Fragment>
                          );
                        })}
                      </div>
                    ),
                  };
                })}
              />
            ),
          };
        })}
      />
    </>
  );
};

export default HomeMenu;
