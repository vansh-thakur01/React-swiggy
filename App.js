const heading = React.createElement("div", { id: "heading" }, [
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "childChild" }, [
      React.createElement("h1", { id: "child" }, "one"),
      React.createElement("h6", { id: "child" }, "one"),
    ])
  ),
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "childChild" }, [
      React.createElement("h1", { id: "child" }, "one"),
      React.createElement("h6", { id: "child" }, "one"),
    ])
  ),
]);

const h = React.createElement(
    "div",
    { id: "child" },
    "hi");

    console.log(h);



console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("hithere"));

root.render(heading);
