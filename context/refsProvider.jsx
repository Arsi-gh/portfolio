const { createContext, useContext, useRef } = require("react");

const RefContext = createContext()

export default function RefProvider ({children}) {

    const servicesRef = useRef()
    const aboutRef = useRef()

    return (
        <RefContext.Provider value={{servicesRef , aboutRef}}>
            {children}
        </RefContext.Provider>
    )
}

export const useRefs = () => {
    return (
        useContext(RefContext)
    )
}