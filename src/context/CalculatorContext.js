import { createContext, useState } from "react";

export const calculatorContext = createContext(); 

const Context = ({ children }) => {

    const [speed, setSpeed] = useState(0)
    const [convertedSpeed, setConvertedSpeed] = useState(0)
    const [speedType, setSpeedType] = useState("mbps")
    
    const [fileSize, setFileSize] = useState(0)
    const [convertedFileSize, setConvertedFileSize] = useState(0)
    const [fileSizeType, setFileSizeType] = useState("gb")
    
    const [result, setResult] = useState(0); 

    const data = {
        speed,
        setSpeed,
        convertedSpeed,
        setConvertedSpeed,
        speedType,
        setSpeedType,
        fileSize,
        setFileSize,
        convertedFileSize,
        setConvertedFileSize,
        fileSizeType,
        setFileSizeType,
        result,
        setResult
    }


    return(
        <calculatorContext.Provider value={data}>
            {children}
        </calculatorContext.Provider>
    )
}

export default Context