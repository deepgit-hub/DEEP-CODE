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
<button
  className="deep-learn-back-btn"
  onClick={() => navigate("/deep")}
>
  ← Back to DEEPEX
</button>
      {/* ================= HERO ================= */}

<section className="deep-learn-hero">

  <div className="deep-learn-hero-content">

    <div className="deep-learn-badge">
      🎓 DEEPEX
    </div>

    <h1 className="deep-learn-title">
      DEEP LEARN
    </h1>

    <p className="deep-learn-main-description">
      Build the skills that help you communicate,
      work, and grow with confidence.
    </p>

    <p className="deep-learn-sub-description">
      Learn practical skills through real situations,
      simple explanations, useful expressions, and
      guided practice.
    </p>

    <div className="deep-learn-highlights">

      <div className="deep-learn-highlight">
        <span>✓</span>
        <p>English + Tamil</p>
      </div>

      <div className="deep-learn-highlight">
        <span>✓</span>
        <p>Real-world situations</p>
      </div>

      <div className="deep-learn-highlight">
        <span>✓</span>
        <p>Useful expressions</p>
      </div>

      <div className="deep-learn-highlight">
        <span>✓</span>
        <p>Learn at your own pace</p>
      </div>

    </div>

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