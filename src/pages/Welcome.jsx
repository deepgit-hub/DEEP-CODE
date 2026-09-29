import { useNavigate } from "react-router-dom";
import quotes from "../data/quotes";
import "../styles/Welcome.css";

function Welcome() {
  const navigate = useNavigate();

  const student = JSON.parse(
    localStorage.getItem("student")
  );

  const randomQuote =
    quotes[Math.floor(Math.random() * quotes.length)];

  function startLearning() {
    navigate(`/home/${student.language}`);
  }

  return (
    <div className="welcome-page">

      <div className="welcome-card">

        <div className="logo">
          🌾
        </div>

        <h1>DEEP CODE</h1>

        <h2>Welcome Junior 👋</h2>

        <h3>{student.name}</h3>

        <div className="quote-card">

  <p className="quote">

    "{randomQuote.quote}"

  </p>

  <h4 className="author">

    — {randomQuote.author}

  </h4>

</div>

        <div className="language-card">

          <span>📚 Choosen Language</span>

          <h2>
  {student.language === "java" && "☕ JAVA"}
  {student.language === "python" && "🐍 PYTHON"}
  {student.language === "cpp" && "⚙️ C++"}
</h2>

        </div>

        <button
          className="start-btn"
          onClick={startLearning}
        >
          🚀 Let's Start Learning
        </button>

        <p className="footer-text">
          Made with ❤️ by Supreme Senior DEEPAK
        </p>

      </div>

    </div>
  );
}

export default Welcome;
