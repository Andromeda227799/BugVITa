import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBug } from "@fortawesome/free-solid-svg-icons";
//actions
import {
  showBugsList,
  showProductsList,
} from "../redux/ducks/showComponentDuck";

const BugAddedComp = () => {
  const dispatch = useDispatch();
  return (
    <div className="AddBugs">
      <FontAwesomeIcon className="Bug-icon" size="5x" icon={faBug} />
      Bug Added Succesfully!
    </div>
  );
};

export default BugAddedComp;
