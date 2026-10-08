import { useNavigate } from "react-router-dom";
import "../styles/DeepLearn.css";

function DeepLearn() {
  const navigate = useNavigate();

  const categories = [
    {
      id: "communication",
      icon: "🗣️",
      title: "Communication Skills",
      description:
        "Learn how to communicate clearly, confidently, and professionally.",
    },
    {
      id: "interview",
      icon: "🎤",
      title: "Interview Skills",
      description:
        "Prepare yourself to communicate confidently during interviews.",
    },
    {
      id: "workplace",
      icon: "💼",
      title: "Workplace Skills",
      description:
        "Learn the practical skills needed to work effectively with others.",
    },
    {
      id: "professional",
      icon: "💻",
      title: "Professional Skills",
      description:
        "Build the habits and skills that help you grow professionally.",
    },
    {
      id: "personal",
      icon: "🧠",
      title: "Personal Skills",
      description:
        "Develop yourself, manage challenges, and prepare for your future.",
    },
  ];

  return (
    <div className="deep-learn-page">

      <div className="deep-learn-header">

        <div className="deep-learn-logo">
          DEEPEX
        </div>

        <h1>🎓 DEEP LEARN</h1>

        <p>
          Build the skills you need for your professional journey.
        </p>

      </div>

      <div className="deep-learn-categories">

        {categories.map((category) => (
          <button
            key={category.id}
            className="deep-learn-category-card"
            onClick={() =>
              navigate(`/deep-learn/${category.id}`)
            }
          >

            <div className="deep-learn-category-icon">
              {category.icon}
            </div>

            <h2>{category.title}</h2>

            <p>{category.description}</p>

          </button>
        ))}

      </div>

    </div>
  );
}

export default DeepLearn;