import React from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { selectName } from '../../redux/reducers/app.slice';

const Direct = () => {
  const name = useAppSelector(selectName);

  return <div>{name}</div>;
};

export default Direct;
