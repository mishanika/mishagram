import React from 'react';
import './Message.css';
import { useAppSelector } from '../../hooks/useReduxHooks';
import ChevronDownSVG from '../../assets/svg/ChevronDownSVG';
import NewDirectMessageSVG from '../../assets/svg/NewDirectMessageSVG';
import { makeStyles } from '@mui/styles';
import { Box, Button, GlobalStyles, Stack } from '@mui/material';
import DialogList from './components/dialogList/DialogList';
import { selectDialogs } from '../../redux/reducers/direct..slice';
import darkScrollbar from '@mui/material/darkScrollbar';

const useStyles = makeStyles({
  btn: {},
  scrollBar: { paddingTop: 8, overflow: 'hidden', overflowY: 'scroll' },
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
          <GlobalStyles styles={{ ...darkScrollbar() }} />
          <Box className={classes.scrollBar}>
            <DialogList dialogs={dialogs} />
          </Box>
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
