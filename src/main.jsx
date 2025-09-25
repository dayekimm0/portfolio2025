import { createRoot } from "react-dom/client";
import Root from "./Root.jsx";
import GlobalStyles from "./styles/GlobalStyles.styles.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <GlobalStyles />
    <Root />
  </>
);
