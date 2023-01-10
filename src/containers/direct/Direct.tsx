import React from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { selectName } from '../../redux/reducers/app.slice';

const Direct = () => {
  const name = useAppSelector(selectName);
  return (
    <div>
      <div>{name}</div>
    </div>
  );
};

export default Direct;
