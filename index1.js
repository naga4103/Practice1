import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement("h1", {}, "Namaste Everyone!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
const heading1 = React.createElement(
  "h1",
  { id: "title", key: "h1" },
  "Heading 1"
);
const heading2 = React.createElement(
  "h1",
  { id: "title1", key: "h2" },
  "Heading 2"
);
const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);

const heading6 = () => <h1>Hello</h1>;

const HeaderComponent1 = () => (
  <div>
    {heading6}
    <h1>One</h1>
    <h2>Two</h2>
  </div>
);

const heading3 = <h1>Hello World!</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent1 />);
