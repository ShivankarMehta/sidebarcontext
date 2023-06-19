import React,{ useState, useContext } from "react";

const AppContext=React.createContext();
const AppProvider=({children})=>{
    const [isSidebarOpen, setIsSidebarOpen]=useState(false);
    const [isModal, setIsModal]=useState(false);

    const openSidebar=()=>{
        setIsSidebarOpen(true);
    }
    const closeSidebar=()=>{
        setIsSidebarOpen(false);
    }
    const openModal=()=>{
        setIsModal(true);
    }
    const closeModal=()=>{
        setIsModal(false);
    }
    return <AppContext.Provider value={{isSidebarOpen,isModal,openSidebar,closeSidebar,openModal,closeModal}}>
        {children}
    </AppContext.Provider>
}
//custom Hook
export const useGlobalContext=()=>{
    return useContext(AppContext)
}
export {AppContext,AppProvider}