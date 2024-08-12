import { useDispatch } from '../../utils/GameState';
import { SET_ACTIVE_HOLE } from '../../utils/actions';

function Digging() {
  const dispatch = useDispatch();

  const handleSelectHole = (holeId) => {
    dispatch({ type: SET_ACTIVE_HOLE, payload: holeId });
  };

  return (
    <div className="digging">
      <div className="dig hole1" onClick={() => handleSelectHole(1)}>
        Soft Eath
      </div>
      <div className="dig hole2" onClick={() => handleSelectHole(2)}>
        Hard Earth
      </div>
      <div className="dig hole3" onClick={() => handleSelectHole(3)}>
        Compacted Rocks
      </div>
    </div>
  );
}

export default Digging;