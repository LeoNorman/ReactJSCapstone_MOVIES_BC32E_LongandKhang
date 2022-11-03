import React, { Fragment } from "react";
import { useEffect } from "react";
import { Route } from "react-router";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import HomeCarousel from "./Layout/HomeCarousel/HomeCarousel";

const HomeTemplate = (props) => {
  const { Component, ...restProps } = props;
  console.log("hometemplate", props);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Header {...propsRoute} />
            <HomeCarousel {...propsRoute} />

            <Component {...propsRoute} />

            <Footer />
          </Fragment>
        );
      }}
    />
  );
};

export default HomeTemplate;
