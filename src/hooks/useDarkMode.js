import useLocalStorage from "./useLocalStorage";
import { useEffect } from "react";

export default useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

    useEffect(() => {
        const body = document.querySelector("body");
        console.log(body);

        darkMode ?
            body.setAttribute("class", "dark-mode") :
            body.setAttribute("class", null);
    }, []);

    return [darkMode, setDarkMode];
}