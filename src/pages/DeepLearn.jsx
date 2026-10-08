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
        "Learn how to communicate clearly, confidently, and professionally in different situations.",
    },
    {
      id: "interview",
      icon: "🎤",
      title: "Interview Skills",
      description:
        "Prepare yourself to communicate confidently and professionally during interviews.",
    },
    {
      id: "workplace",
      icon: "💼",
      title: "Workplace Skills",
      description:
        "Learn the practical skills needed to work effectively with others in the workplace.",
    },
    {
      id: "professional",
      icon: "💻",
      title: "Professional Skills",
      description:
        "Build the habits and skills that help you communicate, collaborate, and grow professionally.",
    },
    {
      id: "personal",
      icon: "🧠",
      title: "Personal Skills",
      description:
        "Develop yourself, manage challenges, and build the confidence needed for your future.",
    },
  ];

  return (
    <div className="deep-learn-page">

      {/* ================= BACK BUTTON ================= */}

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
            🎓 A Learning Platform by DEEPEX
          </div>

          <h1 className="deep-learn-title">
            Build the Skills You Need for Real Life,
            <br />
            Not Just the Classroom.
          </h1>

          <p className="deep-learn-main-description">
            DEEP LEARN is a bilingual learning space where students
            can develop communication, interview, workplace,
            professional, and personal skills through simple
            explanations and practical situations.
          </p>

          <p className="deep-learn-sub-description">
            Learn how to communicate confidently, handle real
            workplace situations, prepare for interviews, express
            yourself professionally, and develop habits that help
            you grow.
          </p>


          {/* ================= FEATURE CARDS ================= */}

          <div className="deep-learn-features">

            <div className="deep-learn-feature-card">

              <div className="deep-learn-feature-header">

                <div className="deep-learn-feature-icon">
                  💬
                </div>

                <h3>
                  Communication & Confidence
                </h3>

              </div>

              <p>
                Learn how to express yourself clearly, listen
                effectively, and communicate confidently in
                different situations.
              </p>

            </div>


            <div className="deep-learn-feature-card">

              <div className="deep-learn-feature-header">

                <div className="deep-learn-feature-icon">
                  💼
                </div>

                <h3>
                  Workplace & Professional Skills
                </h3>

              </div>

              <p>
                Understand the practical skills needed to work
                with others, handle workplace situations, and
                grow professionally.
              </p>

            </div>


            <div className="deep-learn-feature-card">

              <div className="deep-learn-feature-header">

                <div className="deep-learn-feature-icon">
                  🎤
                </div>

                <h3>
                  Interview & Career Preparation
                </h3>

              </div>

              <p>
                Prepare yourself for interviews, professional
                conversations, and the challenges you may face
                as you begin your career.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= START LEARNING ================= */}

      <section className="deep-learn-categories-section">

        <div className="deep-learn-section-header">

          <h2>
            Start Learning
          </h2>

          <p>
            Choose a skill area and start improving yourself
            step by step.
          </p>

        </div>


        <div className="deep-learn-categories">

          {categories.map((category) => (
            <button
              key={category.id}
              className="deep-learn-category-card"
              onClick={() =>
                navigate(`/deep-speak/${category.id}`)
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