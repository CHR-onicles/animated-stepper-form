import { createGlobalStyle } from "styled-components";

import { rem, size } from "./Utilities.styled";

import "@radix-ui/colors/mauve.css";
import "@radix-ui/colors/violet.css";
import "@radix-ui/colors/blue.css";
import "@radix-ui/colors/green.css";


export const GlobalStyles = createGlobalStyle`

    :root {
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;

        // CSS variables ----------------------------------------
        --clr-primary-100: hsl(212, 97%, 55%, 0.1);
        --clr-primary-200: hsl(212, 97%, 55%, 0.3);
        --clr-primary-400: 	hsl(212, 97%, 55%);
        --clr-primary-700: 	hsl(214, 37%, 20%);

        --clr-white: hsl(0, 0%, 100%);
        --clr-black: hsl(0, 0%, 0%);

        --clr-gray-100: hsl(200, 20%, 97%);
        --clr-gray-150: hsl(0, 0%, 89%);
        --clr-gray-175: hsl(0, 0%, 85%);
        --clr-gray-200: hsl(0, 0%, 80%);
        --clr-gray-300: hsl(0, 0%, 70%);
        --clr-gray-400: hsl(0, 0%, 50%);
        --clr-gray-500: hsl(0, 0%, 40%);
        --clr-gray-700: hsl(0, 0%, 12%);

        --font-primary: "Poppins", sans-serif;

        --ease-slow-start: cubic-bezier(0.52, 0.01, 0, 1);
        --ease-quick-start-and-end: cubic-bezier(0.19, 1, 0.22, 1);
        --ease-almost-linear: cubic-bezier(0.4,0.6,0.6,1);
        --ease-text-reveal: cubic-bezier(0.77, 0, 0.175, 1);

        --border-radius-1: 3px;
        --border-radius-2: 5px;
        --border-radius-3: 7px;
        --border-radius-4: 10px;
        --border-radius-5: 15px;

        // APP RELATED VARIABLES --------------------------------------
        --app-height: min(100%, ${rem(650)});
    }

    *, ::before, ::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        scroll-behavior: smooth; // for faster scroll to top during page transitions
        /* height: 100%; */ // Lenis needs this to be auto
    }

    body {
        min-height: 100%;
        color: var(--clr-primary-700);
        background-color: var(--clr-gray-100);
        font-family: var(--font-primary);
        font-size: ${rem(16)};
        line-height: 1.5;
        overflow-x: hidden;
    }

    h1, h2 {
        line-height: 1.1;
    }

    h3, h4, h5, h6 {
        line-height: 1.2;
    }

    img, iframe {
        display: block;
        ${size("100%")}
        max-width: 100%;
        object-fit: cover;
        object-position: center;
        border-style: none;  // Remove the border on images inside links in IE 10.
    }

    ul, ol {
        list-style-type: none;
    }

    a {
        font-family: inherit;
        color: inherit;
        display: inline-block;
        text-decoration: none;
    }

    button, input, select, textarea {
        border: none;
        font-family: inherit;
    }

    label {
        font-size: ${rem(14)};
        font-weight: 500;
        /* line-height: 1.1; */
        margin-bottom: 0.3rem;

        sup {
            color: red;
        }
    }
    
    input,
    textarea {
        width: 100%;
        padding: 0.7em 1em;
        color: inherit;
        background-color: hsl(180, 9%, 98%);
        border-radius: var(--border-radius-2);
        border: 1px solid var(--clr-gray-300);
        outline: none;

        
        &:read-only {
            background-color: var(--clr-gray-100);
            border: 1px solid var(--clr-gray-150);
            color: var(--clr-gray-400);
        }

        &:focus:not(:read-only) {
            box-shadow: inset 0 0 0 1px var(--clr-primary-400);
            border-color: rgb(0,0,0,0);
        }
    }

    textarea {
        resize: none;
    }

    button {
        cursor: pointer;
        background: none;
    }

   //  Correct the inability to style clickable types in iOS and Safari.

    button,
    [type="button"],
    [type="reset"],
    [type="submit"] {
    -webkit-appearance: button;
    }

    // Remove all animations and transitions for users
    // who have it turned off in system settings
    @media (prefers-reduced-motion: reduce) {
    *,
    ::before,
    ::after {
        animation-delay: -1ms !important;
        animation-duration: 1ms !important;
        animation-iteration-count: 1 !important;
        background-attachment: initial !important;
        scroll-behavior: auto !important;
        transition-duration: 0s !important;
        transition-delay: 0s !important;
    }
}
`;
