//ACTIONS:
export const showBugsList = () => {
  return {
    type: "SHOW_BUGSLIST",
  };
};
export const showLogin = () => {
  return {
    type: "SHOW_LOGIN",
  };
};
export const showProductsList = () => {
  return {
    type: "SHOW_PRODUCTSLIST",
  };
};
export const AddBugs = () => {
  return {
    type: "SHOW_BUG_ADD",
  };
};
export const BugAddedScreen = () => {
  return {
    type: "Bug_Added_Screen",
  };
};

//REDUCERS:
const initialState = "SHOW_PRODUCTSLIST";

const showComponentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_BUGSLIST":
      return "SHOW_BUGSLIST";
    case "SHOW_PRODUCTSLIST":
      return "SHOW_PRODUCTSLIST";
    case "SHOW_LOGIN":
      return "SHOW_LOGIN";
    case "SHOW_BUG_ADD":
      return "SHOW_BUG_ADD";
    case "Bug_Added_Screen":
      return "Bug_Added_Screen";
    default:
      return state;
  }
};

export default showComponentReducer;
