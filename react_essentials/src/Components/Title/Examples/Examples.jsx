import { useState } from "react";
import "./examples.css";

function Examples() {
  const [selectedButton, setSelectedButton] = useState("");

  const handleClick = (selected) => {
    setSelectedButton(selected);
  };
  const renderContent = () => {
    switch (selectedButton) {
      case "Components":
        return (
          <div className="explanation">
            <div className="topic">
              <h3>{selectedButton}</h3>
            </div>
            <div className="text">
              <p>
                Components are the building block of React applicaitons. A
                component is a self-contained module
                <p>(HTML+optional CSS + JS) that renders some output</p>
              </p>
            </div>
            <div className="code">
              <code>
                {"function Welcome() {"}
                <br />
                {"return <h1>Hello,World!</h1>;"}
                <br />

                {"}"}
              </code>
            </div>
          </div>
        );
      case "JSX":
        return (
          <div className="explanation">
            <div className="topic">
              <h3>{selectedButton}</h3>
            </div>
            <div className="text">
              <p>
                JSX (JavaScript XML) is a syntax extension for JavaScript that
                is commonly used in React to describe what the UI should look
                like. It allows you to write HTML-like code directly within
                JavaScript, making the code more readable and intuitive when
                defining the structure of your components.
              </p>
            </div>
            <div className="code">
              <code>
                {"function Welcome() {"}
                <br />
                {"return <h1>Hello,World!</h1>;"}
                <br />

                {"}"}
              </code>
            </div>
          </div>
        );
      case "Props":
        return (
          <div className="explanation">
            <div className="topic">
              <h3>{selectedButton}</h3>
            </div>
            <div className="text">
              <p>
                Props in React are a way to pass data from one component to
                another, typically from a parent component to a child component.
                They are read-only and allow components to be more dynamic and
                reusable by giving them access to different data values.
              </p>
            </div>
            <div className="code">
              <code>
                {"function Welcome() {"}
                <br />
                {"return <h1>Hello,World!</h1>;"}
                <br />

                {"}"}
              </code>
            </div>
          </div>
        );
      case "State":
        return (
          <div className="explanation">
            <div className="topic">
              <h3>{selectedButton}</h3>
            </div>
            <div className="text">
              <p>
                State in React refers to a built-in object that allows
                components to manage and track changes in data over time. It is
                used to store dynamic data that can change based on user
                interaction, API responses, or other events. When the state of a
                component changes, React automatically re-renders the component
                to reflect the updated state in the UI.
              </p>
            </div>
            <div className="code">
              <code>
                {"import { useState } from 'react';"}
                <br />
                <br />
                {"function Counter() {"}
                <br />
                {"  const [count, setCount] = useState(0);"}
                <br />
                <br />
                {"  return ("}
                <br />
                {"    <div>"}
                <br />
                {"      <p>Current count: {count}</p>"}
                <br />
                {
                  "      <button onClick={() => setCount(count + 1)}>Increment</button>"
                }
                <br />
                {"    </div>"}
                <br />
                {"  );"}
                <br />
                {"}"}
              </code>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="Example">
      <div className="container">
        <div className="examples-wrapper">
          <h3>Examples</h3>
          <ul className="buttons">
            <li>
              <button
                className={selectedButton === "Components" ? "active" : ""}
                onClick={() => handleClick("Components")}
              >
                Components
              </button>
            </li>
            <li>
              <button
                className={selectedButton === "JSX" ? "active" : ""}
                onClick={() => handleClick("JSX")}
              >
                JSX
              </button>
            </li>
            <li>
              <button
                className={selectedButton === "Props" ? "active" : ""}
                onClick={() => handleClick("Props")}
              >
                Props
              </button>
            </li>
            <li>
              <button
                className={selectedButton === "State" ? "active" : ""}
                onClick={() => handleClick("State")}
              >
                State
              </button>
            </li>
          </ul>
          <div className="explanation">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
}

export default Examples;
