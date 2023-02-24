import { Avatar, Box, Typography } from '@mui/material';
import React from 'react';
import { IDialog } from '../../../../types/types';
import logo from '../../../../assets/png/donikghoul.png';
import { makeStyles } from '@mui/styles';
import theme from '../../../../theme/theme';
/* eslint-disable no-unused-vars */
const useStyles = makeStyles({
  dialogContainer: {
    height: 72,
    padding: '8px 20px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
      cursor: 'pointer',
    },
  },
  message: { marginTop: 3, color: theme.palette.secondary.main },
});
const Dialog = ({ senderAvatar, senderName, lastMessage, messageSent }: IDialog) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.dialogContainer}>
        <Box>
          <Avatar sx={{ width: 56, height: 56 }} alt="123" src={logo} />
        </Box>
        <Box>
          <Box>
            <Typography>{senderName}</Typography>
          </Box>
          <Box className={classes.message}>
            <Typography>{lastMessage}</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Dialog;
