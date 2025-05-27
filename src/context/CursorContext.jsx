import { createContext, useContext, useState } from "react";

const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const [cursorVariant, setCursorVariant] = useState("default");
  const [cursorText, setCursorText] = useState("");

  return (
    <CursorContext.Provider value={{ cursorVariant, setCursorVariant, cursorText, setCursorText }}>
      {children}
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);
