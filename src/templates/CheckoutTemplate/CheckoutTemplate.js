import React, { Fragment, useEffect } from 'react'
import { Route,Redirect } from 'react-router'
import { USER_LOGIN } from '../../util/settings/config'
const CheckoutTemplate = (props) => {
    const {Component, ...restProps} = props
    useEffect(()=>{
      window.scrollTo(0,0)
    })
  return <Route {...restProps} render={(propsRoute) => {

    const {Component,...restProps}=props
    if(!localStorage.getItem(USER_LOGIN)){
      return <Redirect to='/login' />
    }
    return <Fragment>
        <Component {...propsRoute}/>
    </Fragment>
  }} />
}

export default CheckoutTemplate