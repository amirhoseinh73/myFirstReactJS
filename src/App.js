const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
    // ...[ 1, 2, 3, 4 ].map( i => React.createElement( "h2", {}, i ) ),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havenese",
    }),
    React.createElement(Pet, {
      name: "jimi",
      animal: "cat",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, {
      name: "bernard",
      animal: "bird",
      breed: "Wheaten Terrier",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
