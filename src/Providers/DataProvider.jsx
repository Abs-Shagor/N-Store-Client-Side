import { createContext, useEffect, useState } from "react";



/* eslint-disable react-refresh/only-export-components */
export const DataContext = createContext(null);

const DataProvider = ({ children }) => {

    // The Sidebar menue of navbar handling
    const [open, setOpen] = useState(false);

    const data = {  open, setOpen  }

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;