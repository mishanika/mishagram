import Main from '../main/Main';
import Explore from '../explore/Explore';
import Reels from '../reels/Reels';
import Direct from '../direct/Direct';
import Profile from '../profile/Profile';
//import Registration from '../login/Login';
import Login from '../login/Login';
import { IRoute } from './types';

export const routes: IRoute[] = [
  {
    path: '/',
    component: <Main />,
  },
  {
    path: '/explore',
    component: <Explore />,
  },
  {
    path: '/reels',
    component: <Reels />,
  },
  {
    path: '/direct',
    component: <Direct />,
  },
  {
    path: '/profile',
    component: <Profile />,
  },
  {
    path: '/login',
    component: <Login />,
  },
];
