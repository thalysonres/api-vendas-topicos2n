import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {Dashboard} from '../pages/Dashboard/index'
import {Repository} from '../pages/Repository/index'

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route component={Dashboard} path="/" exact/>
      <Route component={Repository} path="/repository"/>
    </Switch>
  )
} 
