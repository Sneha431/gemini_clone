import { createContext, useState } from "react";

import runChat from "../config/gemini.js";
export const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const [input, setinput] = useState("");
  const [recentprompt, setrecentprompt] = useState("");
  const [prevprompt, setprevprompt] = useState([]);
  const [showResult, setshowResult] = useState(false);
  const [loading, setloading] = useState(false);
  const [resultData, setresultData] = useState("");

  const onsent = async (prompt) => {
    setloading(true);
    setrecentprompt(true);
    setresultData("");
    try {
      const result = await runChat(prompt); // Use the provided prompt argument
      // const result = "";
      setshowResult(true);
      setresultData(result); // Update state with the result
      setprevprompt([prompt, ...prevprompt]);
      setrecentprompt(prompt);
    } catch (error) {
      console.error("Error in onsent:", error);
      // Handle any errors gracefully, e.g., show an error message to the user
    } finally {
      setloading(false); // Ensure loading is always set to false, even if an error occurs
      setinput(""); // Optionally clear the input after sending
    }
  };
  // useEffect(() => {
  //   runChat("What is react ?");

  //   return () => {};
  // }, []);

  const contextValue = {
    prevprompt,
    setprevprompt,
    onsent,
    recentprompt,
    setrecentprompt,
    showResult,
    setshowResult,
    loading,
    setloading,
    resultData,
    setresultData,
    input,
    setinput,
  };
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default ContextProvider;
