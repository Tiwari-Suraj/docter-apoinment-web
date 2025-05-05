import { createContext } from "react";
import { doctors } from "../assets/assets";

export const Appcontext = createContext();
const AppContextProvider = (props) => {
  const currencySymbol = "₹";
  const value = {
    doctors,
    currencySymbol,
  };
  return (
    <Appcontext.Provider value={value}>{props.children}</Appcontext.Provider>
  );
};
export default AppContextProvider;
