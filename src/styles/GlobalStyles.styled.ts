import { createGlobalStyle } from "styled-components";

import { rem, size } from "./Utilities.styled";


export const GlobalStyles = createGlobalStyle`

    :root {
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;

        // CSS variables here ----------------------------------------

        --clr-primary-400: 0;

        --clr-white: hsl(0, 0%, 100%);
        --clr-black: hsl(0, 0%, 0%);
        --clr-gray-100: hsl(0, 0%, 97%);
        --clr-gray-200: hsl(0, 0%, 87%);
        --clr-gray-300: hsl(0, 0%, 77%);
        --clr-gray-400: hsl(0, 0%, 67%);
        --clr-gray-500: hsl(0, 0%, 57%);
        --clr-gray-600: hsl(0, 0%, 47%);
        --clr-gray-700: hsl(0, 0%, 37%);
        --clr-gray-800: hsl(0, 0%, 27%);
        --clr-gray-900: hsl(0, 0%, 17%);

        --font-primary: "Poppins", sans-serif;
        --font-secondary: serif;

        --ease-slow-start: cubic-bezier(0.52, 0.01, 0, 1);
        --ease-quick-start-and-end: cubic-bezier(0.19, 1, 0.22, 1);
        --ease-almost-linear: cubic-bezier(0.4,0.6,0.6,1);
        --ease-text-reveal: cubic-bezier(0.77, 0, 0.175, 1);

        --border-radius-1: 3px;
        --border-radius-2: 5px;
        --border-radius-3: 10px;

        // APP-SPECIFIC CSS variables here ----------------------------------------
        
    }

    *, ::before, ::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        /* scroll-behavior: smooth; */ // for faster scroll to top during page transitions
        /* height: 100%; */ // Lenis needs this to be auto
    }

    body {
        min-height: 100%;
        background-color: var(--clr-white);
        /* background: color-mix(in srgb, var(--clr-gray-900) 50%, transparent); */
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

    button {
        cursor: pointer;
        background: none;
        white-space: nowrap;
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
