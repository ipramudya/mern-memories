import { createContext, useContext, useState } from 'react';

const currentIdAndForm = createContext();

export const useCurrentIdAndFormContext = () => useContext(currentIdAndForm);

export const CurrentIdAndFormProvider = ({ children }) => {
  const [currentId, setCurrentId] = useState(null);
  const [isFormActive, setIsFormActive] = useState(false);

  const value = {
    currentId,
    isFormActive,
    setCurrentId,
    setIsFormActive,
  };

  return (
    <currentIdAndForm.Provider value={value}>
      {children}
    </currentIdAndForm.Provider>
  );
};
