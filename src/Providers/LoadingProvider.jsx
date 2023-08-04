import { createContext, useState } from "react";
import { Audio } from "react-loader-spinner";

const loadingContext = createContext()
// eslint-disable-next-line react/prop-types
const LoadingProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true);
    const data = {
        loading,
        setLoading
    }
    if (loading) {
        return <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    }
    return (
        <loadingContext.Provider value={data}>
            {children}
        </loadingContext.Provider>
    );
};

export default LoadingProvider;