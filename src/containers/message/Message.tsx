/* eslint-disable no-unused-vars */
import React from 'react';
import './Message.css';
import { useAppSelector } from '../../hooks/useReduxHooks';
import ChevronDownSVG from '../../assets/svg/ChevronDownSVG';
import NewDirectMessageSVG from '../../assets/svg/NewDirectMessageSVG';
import { makeStyles } from '@mui/styles';
import { Button, Stack } from '@mui/material';
import DialogList from './components/dialogList/DialogList';
import { selectDialogs } from '../../redux/reducers/direct..slice';

const useStyles = makeStyles({
  btn: {},
});

const Message = () => {
  const classes = useStyles();

  const dialogs = useAppSelector(selectDialogs);

  return (
    <div className="main-container">
      <div className="direct-container">
        <div className="users-panel">
          <div className="user-panel">
            <div className="user-name">
              <button>
                <span>{dialogs[0].senderName}</span>
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
            <DialogList dialogs={dialogs} />
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

export default Message;
