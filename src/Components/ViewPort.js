import { useState, useEffect, createContext, useContext } from "react";

const viewportContext = createContext({});
export const ViewportProvider = ({ children }) => {
	// This is the exact same logic that we previously had in our hook

	const [width, setWidth] = useState(window.innerWidth);

	const handleWindowResize = () => {
		window.location.reload();
	};

	useEffect(() => {
		window.addEventListener("resize", handleWindowResize);
		return () => window.removeEventListener("resize", handleWindowResize);
	}, []);

	/* Now we are dealing with a context instead of a Hook, so instead
       of returning the width we store the values in the
       value of the Provider */
	return <viewportContext.Provider value={{ width }}>{children}</viewportContext.Provider>;
};
const useViewport = () => {
	/* We can use the "useContext" Hook to acccess a context from within
       another Hook, remember, Hooks are composable! */
	const { width } = useContext(viewportContext);
	return { width };
};
export default useViewport;
