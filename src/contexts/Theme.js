import { createContext,useContext } from "react";

export const ThemeContext=createContext({
    themeMode:"Light",     //by deafult mode
    darkTheme: ()=>{},
    lightTheme: ()=>{},    //jb bhi koi context call krega y default theme bhi milegi and ye 2 methods bhi mil jayege
})


// Can export provider in the same file
export const ThemeProvider=ThemeContext.Provider


//can even make and export custom hooks in the same file

export default function useTheme(){
    return useContext(ThemeContext)
}
// Now if we want to access any of the above three values like themeMode, darkTheme, lightTheme in 
// any of the other file, we can simply use this custom hook "useTheme"