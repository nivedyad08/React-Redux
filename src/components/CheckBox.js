import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {setShowLabel} from '../redux/store'

function CheckBox() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.showLabel);
  const handleShowLabel = (evt) => {
    const checkboxValue = evt.target.checked;
    // dispatch({
    //   type: "show-label",
    //   payload: checkboxValue,
    // });
    dispatch(setShowLabel(checkboxValue))
  };
  return (
    <div>
      <input type="checkbox" checked={value} onChange={handleShowLabel} />
      Show Label
      <br />
      <input type="text" value={value} />
    </div>
  );
}

export default CheckBox;
