import React from 'react';
import Dialog from '../dialog/Dialog';
import { DialogListProps } from '../../types';

const DialogList = ({ dialogs }: DialogListProps) => {
  const renderDialogs = () => {
    return dialogs.map((dialog) => (
      <>
        <Dialog key={dialog.id} {...dialog} />
      </>
    ));
  };
  return <>{renderDialogs()}</>;
};

export default DialogList;
