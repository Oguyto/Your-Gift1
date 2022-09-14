import { Link } from "react-router-dom";
import "../styles/main_style.css";

function Home() {
  return (
    <div className="App">
      <header className="text">
          <h1>It is your lucky day</h1>
      </header>
      <article>
        <h3>Une soirée tranquille, pour faire connaissance autour d'un verre.</h3>
        <h3>Nos valeurs : Respect, Discrétion, Sans risque et Sans rancune.</h3>
      </article>
      <nav>
        <Link to="./login">Click To Continue</Link>
      </nav>
    </div>
  );
}

export default Home;
