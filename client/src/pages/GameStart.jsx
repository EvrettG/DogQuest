import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from '../utils/auth';
// import './GameStart.css';

function GameStart() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();

  const handleStart = () => {
    if (!Auth.loggedIn()) {
      setShowConfirmation(true);
    } else {
      navigate('/game/main');
    }
  };

  const handleConfirm = () => {
    navigate('/game/main');
  };

  const handleCancel = () => {
    navigate('/login');
  };

  return (
    <div className="game-start-container">
      <button className="start-button" onClick={handleStart}>Start</button>
      {showConfirmation && (
        <div className="confirmation-dialog">
          <p>Your progress will not be saved. Do you want to continue?</p>
          <button className="confirm-button" onClick={handleConfirm}>Yes</button>
          <button className="cancel-button" onClick={handleCancel}>No, take me to login</button>
        </div>
      )}
    </div>
  );
}

export default GameStart;