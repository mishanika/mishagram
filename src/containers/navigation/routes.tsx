import Main from '../main/Main';
import Explore from '../explore/Explore';
import Reels from '../reels/Reels';
import Profile from '../profile/Profile';
import Login from '../login/Login';
import { IRoute } from './types';
import Message from '../message/Message';

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
    component: <Message />,
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
