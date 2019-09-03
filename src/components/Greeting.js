import React, { useState, useContext, useEffect } from "react";
import Row from "./Row";
import { ThemeContext, LocaleContext } from "./context";

export default function Greeting(props) {
  const name = useFormInput("Mary");
  const surname = useFormInput("Poppins");

  const theme = useContext(ThemeContext);
  const locale = useContext(LocaleContext);

  const width = useWindowWidth();

  useDocumentTitle(name.value + " " + surname.value);

  return (
    <section className={theme}>
      <Row label="Name">
        <input {...name} />
      </Row>
      <Row label="Surname">
        <input {...surname} />
      </Row>
      <Row label="Language">{locale}</Row>
      <Row label="Width">{width}</Row>
    </section>
  );
}
function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }
  console.log({ value, onChange: handleChange });
  return {
    value,
    onChange: handleChange
  };
}
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("resize", handleResize);
    };
  });
  return width;
}

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  });
}

/*class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Mary"
    };
    this.handleNameChange = this.handleNameChange.bind(this);
  }
  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  render() {
    return (
      <Row label="Name">
        <input value={this.state.name} onChange={this.handleNameChange} />
      </Row>
    );
  }
}

export default Greeting;*/
