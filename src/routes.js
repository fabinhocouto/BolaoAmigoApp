import React from 'react';
import {createAppContainer, createSwitchNavigator } from 'react-navigation';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard'
import Preload from './components/Preload'
import NewRodada from './pages/NewRodada';
import NewResultadoMegaSena from './pages/NewResultadoMegaSena';
import Profile from './pages/Profile'
import { createDrawerNavigator} from 'react-navigation-drawer'

const Routes = createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          Preload,
          SignIn,
          SignUp
        }),
        App: createDrawerNavigator({
          Dashboard,
          NewRodada,
          NewResultadoMegaSena,
          Profile
        },{
          
        })
      },
    ),
  )
  
  export default Routes;