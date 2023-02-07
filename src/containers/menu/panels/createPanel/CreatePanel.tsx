import React from 'react';
import DragPhotoAndVideoSVG from '../../../../assets/svg/DragPhotoAndVideoSVG';
import { texts } from '../../../../constants/textsMenu';
import './CreatePanel.css';

const CreatePanel = () => {
  return (
    <div className="create-block">
      <div className="inner-create">
        <span>{texts.createNewPost}</span>
        <div className="drag-photos-and-videos">
          <DragPhotoAndVideoSVG />
          <span>{texts.dragPhotosAndVideosHere}</span>
          <div className="select-from-computer">{texts.selectFromComputer}</div>
        </div>
      </div>
    </div>
  );
};
export default CreatePanel;
