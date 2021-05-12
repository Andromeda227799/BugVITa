import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BugAdded } from "../redux/ducks/bugsAddDuck";

import {
  showBugsList,
  showProductsList,
  BugAddedScreen,
} from "../redux/ducks/showComponentDuck";
import BugsList from "./BugsList";
import axios from "axios";

const BugsAddComp = () => {
  const selectedProduct = useSelector((state) => state.selectedProduct);
  console.log(selectedProduct);

  const [textInput_bug, setTextInput_bug] = useState("");
  const [textInput_author, setTextInput_author] = useState("");

  const AddBugHandler = () => {
    const bugAdded = {
      name: textInput_bug,
      author: textInput_author,
      product: "sampleBugs",
      description: textInput_bug,
    };

    dispatch(BugAdded(bugAdded));
    //HERE textInput_bug has the bug description and textInput_author has the respective author name
    // You need to add these to the buglist database which idk how to do lols,probablt teach me later!
    //ADD YOUR CODE HERE{textInput_bug,textInput_author}
    setTextInput_bug("");
    setTextInput_author("");
    dispatch(BugAddedScreen());
    setTimeout(() => dispatch(showBugsList()), 3000);
  };

  const dispatch = useDispatch();
  return (
    <div className="AddBugs">
      <div>
        <textarea
          onChange={(e) => setTextInput_bug(e.target.value)}
          placeholder="Enter new Bug Details!"
          cols="30"
          rows="10"
        ></textarea>
        <textarea
          onChange={(e) => setTextInput_author(e.target.value)}
          placeholder="Enter author!"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div>
        <button className="AddButton" onClick={AddBugHandler}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default BugsAddComp;
