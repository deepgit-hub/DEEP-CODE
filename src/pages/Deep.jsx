import { useNavigate } from "react-router-dom";
import "../styles/Deep.css";

function Deep() {
  const navigate = useNavigate();

  return (
    <div className="deep-page">

      {/* ================= HERO ================= */}

      <section className="deep-hero">

        <div className="deep-hero-content">

          <div className="deep-badge">
            🚀 DEEPEX
          </div>

          <h1>
            Learn. Build.
            <span> Grow.</span>
          </h1>

          <p>
            A learning platform designed to help you build
            technical skills, professional skills, and confidence
            for your future.
          </p>

          <div className="deep-hero-actions">

            <button
              className="deep-primary-btn"
              onClick={() => navigate("/choose-language")}
            >
              💻 Explore DEEP CODE
            </button>

            <button
              className="deep-secondary-btn"
              onClick={() => navigate("/deep-learn")}
            >
              🎓 Explore DEEP LEARN
            </button>

          </div>

        </div>

      </section>


      {/* ================= INTRO ================= */}

      <section className="deep-intro">

        <div className="deep-section-heading">

          <div className="deep-small-label">
            ONE PLATFORM
          </div>

          <h2>
            Everything you need to
            <span> keep growing.</span>
          </h2>

          <p>
            DEEPEX brings learning and personal development
            together in one simple place.
          </p>

        </div>


        <div className="deep-products">

          {/* ================= DEEP CODE ================= */}

          <div className="deep-product-card">

            <div className="deep-product-icon">
              💻
            </div>

            <div className="deep-product-label">
              TECHNICAL LEARNING
            </div>

            <h3>
              DEEP CODE
            </h3>

            <p>
              Learn programming concepts step by step,
              understand how they work, and improve your
              coding skills through practice.
            </p>

            <div className="deep-product-features">

              <span>✓ Programming Concepts</span>
              <span>✓ Practice Questions</span>
              <span>✓ English & Tamil</span>

            </div>

            <button
              onClick={() => navigate("/choose-language")}
              className="deep-product-btn"
            >
              Start Coding →
            </button>

          </div>


          {/* ================= DEEP LEARN ================= */}

          <div className="deep-product-card deep-learn-product">

            <div className="deep-product-icon">
              🎓
            </div>

            <div className="deep-product-label">
              CAREER & PERSONAL DEVELOPMENT
            </div>

            <h3>
              DEEP LEARN
            </h3>

            <p>
              Build communication, interview, workplace,
              professional, and personal skills that help
              you become more confident and prepared.
            </p>

            <div className="deep-product-features">

              <span>✓ Communication Skills</span>
              <span>✓ Interview Skills</span>
              <span>✓ Professional Growth</span>

            </div>

            <button
              onClick={() => navigate("/deep-learn")}
              className="deep-product-btn"
            >
              Start Learning →
            </button>

          </div>

        </div>

      </section>


      {/* ================= WHY DEEPEX ================= */}

      <section className="deep-why">

        <div className="deep-section-heading">

          <div className="deep-small-label">
            WHY DEEPEX?
          </div>

          <h2>
            Learn with a
            <span> purpose.</span>
          </h2>

          <p>
            Learning is more than simply completing lessons.
            It's about understanding, practising, and becoming
            better every day.
          </p>

        </div>


        <div className="deep-benefits">

          <div className="deep-benefit-card">

            <div className="deep-benefit-number">
              01
            </div>

            <h3>
              Understand
            </h3>

            <p>
              Learn concepts clearly instead of simply
              memorising information.
            </p>

          </div>


          <div className="deep-benefit-card">

            <div className="deep-benefit-number">
              02
            </div>

            <h3>
              Practice
            </h3>

            <p>
              Apply what you learn through practical
              questions and real situations.
            </p>

          </div>


          <div className="deep-benefit-card">

            <div className="deep-benefit-number">
              03
            </div>

            <h3>
              Grow
            </h3>

            <p>
              Turn your learning into skills that you
              can use in your academic and professional journey.
            </p>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="deep-cta">

        <div className="deep-cta-content">

          <div className="deep-cta-icon">
            🚀
          </div>

          <h2>
            Ready to start learning?
          </h2>

          <p>
            Choose your path and start building your skills today.
          </p>

          <div className="deep-cta-buttons">

            <button
              onClick={() => navigate("/choose-language")}
              className="deep-primary-btn"
            >
              💻 DEEP CODE
            </button>

            <button
              onClick={() => navigate("/deep-learn")}
              className="deep-secondary-btn"
            >
              🎓 DEEP LEARN
            </button>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="deep-footer">

        <h3>
          DEEPEX
        </h3>

        <p>
          Learn. Build. Grow.
        </p>

        <div className="deep-footer-line"></div>

        <span>
          © 2026 DEEPEX. Keep learning. 🚀
        </span>

      </footer>

    </div>
  );
}

export default Deep;