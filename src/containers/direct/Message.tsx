import React from 'react';
import { MessageState } from './types';

const Messsage = (props: MessageState) => {
  //const { id, name } = props;

  const entries = Object.entries(props);
  console.log(entries);

  // const renderFields = () =>
  //   entries.map((entry) => (
  //     <div>
  //       <div></div>
  //       <div></div>
  //       <div></div>
  //     </div>
  //   ));
  return <>{}</>;
};

export default Messsage;
