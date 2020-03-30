import React, {useState, createContext, useEffect} from 'react'


//const ContextProvider = createContext(ContextInitState) 
const BirthdayStateContext = createContext(false);
const BirthdayStateProvider = BirthdayStateContext.Provider;

//Write set comment likes function. https://stackoverflow.com/questions/43638938/updating-an-object-with-setstate-in-react


function BirthdayProvider({children}){

    const [isBirthdayOpen, setIsBirthdayOpen] = useState(false)
    
    return(
        <BirthdayStateProvider value={{isBirthdayOpen, setIsBirthdayOpen}}>
            {children}
        </BirthdayStateProvider>
    )
}


export {BirthdayProvider, BirthdayStateContext};
