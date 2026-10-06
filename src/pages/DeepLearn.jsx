import { useNavigate } from "react-router-dom";

function DeepLearn() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>🎓 DEEP LEARN</h1>

      <p>
        Build the skills you need for your
        professional journey.
      </p>

      <div>

        <button
          onClick={() =>
            navigate("/deep-learn/communication")
          }
        >
          🗣️ Communication Skills
        </button>

        <button
          onClick={() =>
            navigate("/deep-learn/interview")
          }
        >
          🎤 Interview Skills
        </button>

        <button
          onClick={() =>
            navigate("/deep-learn/workplace")
          }
        >
          💼 Workplace Skills
        </button>

        <button
          onClick={() =>
            navigate("/deep-learn/professional")
          }
        >
          💻 Professional Skills
        </button>

        <button
          onClick={() =>
            navigate("/deep-learn/personal")
          }
        >
          🧠 Personal Skills
        </button>

      </div>
    </div>
  );
}

export default DeepLearn;