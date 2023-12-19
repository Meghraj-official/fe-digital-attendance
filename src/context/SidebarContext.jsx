import React from 'react'


export const SidebarContext = React.createContext(null)

const SidebarContextProvider = ({children}) => {
    const [open, setOpen] = React.useState(false)
  return (
   <SidebarContext.Provider value={{open, setOpen}}>
        {children}
    </SidebarContext.Provider>
  )
}

export default SidebarContextProvider