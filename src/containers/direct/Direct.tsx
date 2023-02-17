/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './Direct.css';
import { useAppSelector } from '../../hooks/hooks';
import { selectName } from '../../redux/reducers/app.slice';
import ChevronDownSVG from '../../assets/svg/ChevronDownSVG';
import NewDirectMessageSVG from '../../assets/svg/NewDirectMessageSVG';
import { makeStyles } from '@mui/styles';
import { Button, Stack } from '@mui/material';
import MessageList from './MessageList';
import { store } from '../../redux/store';

const useStyles = makeStyles({
  btn: {},
});

const Direct = () => {
  const [message, setMessage] = useState(store.getState());
  const classes = useStyles();
  const name = useAppSelector(selectName);

  return (
    <div className="main-container">
      <div className="direct-container">
        <div className="users-panel">
          <div className="user-panel">
            <div className="user-name">
              <button>
                <span>{name}</span>
                <span>
                  <ChevronDownSVG />
                </span>
              </button>
            </div>
            <div className="new-message">
              <button>
                <NewDirectMessageSVG />
              </button>
            </div>
          </div>
          <div className="other-users-panel scroll-container">
            <MessageList key={message.app.id} {...message.app} />
          </div>
        </div>
        <div className="message-panel">
          <Stack color="primary.main">
            <Button className={classes.btn}>3</Button>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Direct;
