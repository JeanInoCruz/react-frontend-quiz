import { ButtonChoice } from "./components/ButtonChoice";
import "./styles.css";

function App() {
  return (
    <>
      <article className="start-menu">
        <div className="left-content">
          <h1>
            Welcome to the <span className="bolded">Frontend Quiz!</span>
          </h1>
          <p>Pick a subject to get started.</p>
        </div>

        <div className="choices">
          <ButtonChoice
            id="HTML"
            src="./svgfonts/images/icon-html.svg"
            alt="html icon"
          />
          <ButtonChoice
            id="CSS"
            src="./svgfonts/images/icon-css.svg"
            alt="css icon"
          />
          <ButtonChoice
            id="Javascript"
            src="./svgfonts/images/icon-js.svg"
            alt="js icon"
          />
          <ButtonChoice
            id="Accessibility"
            src="./svgfonts/images/icon-accessibility.svg"
            alt="Accessibility icon"
          />
        </div>
      </article>
    </>
  );
}

export default App;
