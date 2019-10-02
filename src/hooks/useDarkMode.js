import useLocalStorage from "./useLocalStorage";
import { useEffect } from "react";

export default function useDarkMode() {
    const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

    useEffect(() => {
        const body = document.querySelector("body");

        darkMode ?
            body.setAttribute("class", "dark-mode") :
            body.setAttribute("class", null);
    }, [darkMode]);

    return [darkMode, setDarkMode];
}