import React from 'react';
import DragPhotoAndVideoSVG from '../../../../assets/svg/DragPhotoAndVideoSVG';
import { texts } from '../../../../constants/textsMenu';
import './CreatePanel.css';

const CreatePanel = () => {
  const disappearance = () => {
    const createBlock = document.querySelector('.create-block') as HTMLBaseElement;
    createBlock.style.display = 'none';
  };
  return (
    <div className="create-block" onClick={disappearance}>
      <div className="inner-create">
        <span>{texts.createNewPost}</span>
        <div className="drag-photos-and-videos">
          <DragPhotoAndVideoSVG />
          <span>{texts.dragPhotosAndVideosHere}</span>
          <div className="select-from-computer">{texts.selectFromComputer}</div>
        </div>
      </div>
      <div className="xmark-create" onClick={disappearance}></div>
    </div>
  );
};
export default CreatePanel;
