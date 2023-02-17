import React from 'react';
import Messsage from './Message';
import { MessageState } from './types';

const MessageList = (props: MessageState) => {
  const { id } = props;
  return (
    <div>
      <Messsage key={id} {...props} />
    </div>
  );
};

export default MessageList;
