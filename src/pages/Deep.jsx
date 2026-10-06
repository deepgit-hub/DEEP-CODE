import { useNavigate } from "react-router-dom";

function Deep() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to DEEP 👋</h1>

      <p>What would you like to learn today?</p>

      <button
        onClick={() => navigate("/choose-language")}
      >
        💻 DEEP CODE
      </button>

      <button
        onClick={() => navigate("/deep-learn")}
      >
        🎓 DEEP LEARN
      </button>
    </div>
  );
}

export default Deep;