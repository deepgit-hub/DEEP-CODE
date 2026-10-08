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
  <button
  className="deep-learn-back-btn"
  onClick={() => navigate("/deep")}
>
  ← Back to DEEPEX
</button>

  return (
    <div className="deep-learn-page">

      {/* ================= HERO ================= */}

      <section className="deep-learn-hero">

        <div className="deep-learn-hero-content">

          <div className="deep-learn-badge">
            🎓 DEEPEX
          </div>

          <h1 className="deep-learn-title">
            DEEP LEARN
          </h1>

          <p className="deep-learn-description">
            Build the communication, professional, workplace, interview,
            and personal skills you need for your future.
          </p>

        </div>

      </section>

      {/* ================= CATEGORIES ================= */}

      <section className="deep-learn-categories-section">

        <div className="deep-learn-section-header">

          <h2>
            Start Learning
          </h2>

          <p>
            Choose a skill area and start improving yourself step by step.
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

              <div className="deep-learn-category-content">

                <h3>
                  {category.title}
                </h3>

                <p>
                  {category.description}
                </p>

              </div>

            </button>
          ))}

        </div>

      </section>

    </div>
  );
}

export default DeepLearn;