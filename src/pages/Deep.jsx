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
            👨‍💻 DEEPEX
          </div>

          <h1>
            கற்றுக்கொள். உருவாக்கு.
            <span>  வளரு.</span>
          </h1>
<br></br>
          <p>

            A learning platform designed to help tamil medium students to build
            technical skills, professional skills, and confidence
            for your future.
          </p>

          <div className="deep-hero-actions">

            

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


          {/* ================= DEEP SPEAK ================= */}

          <div className="deep-product-card deep-learn-product">

            <div className="deep-product-icon">
              🎓
            </div>

            <div className="deep-product-label">
              Communication & Professional Growth
            </div>

            <h3>
              DEEP SPEAK
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


     
      {/* ================= DEEPEX FOOTER ================= */}

<footer className="deep-footer">

  <div className="deep-footer-content">

    {/* ================= BRAND ================= */}

    <div className="deep-footer-brand">

      <h3>
        🌾 DEEPEX
      </h3>

      <p>
        Empowering Tamil students to learn,
        build, and grow with confidence.
      </p>

      <p className="deep-footer-tamil">
        தமிழ் மாணவர்கள் நம்பிக்கையுடன் கற்க,
        உருவாக்க மற்றும் வளர உதவும் கற்றல் தளம்.
      </p>

      <p className="deep-footer-quote">
        "From Tamil classrooms to global
        opportunities — your journey starts here."
      </p>

      <div className="deep-footer-products">

        <span>DEEP CODE</span>

        <span>•</span>

        <span>DEEP SPEAK</span>

      </div>

    </div>


    {/* ================= DEVELOPER ================= */}

    <div className="deep-footer-developer">

      <h3>
        👨‍💻 About the Developer
      </h3>

      <p>
        Hi! I'm <strong>Deepak</strong>, a Computer Science
        student passionate about helping Tamil students
        learn technology and develop the skills they need
        for their future.
      </p>

      <p className="deep-footer-tamil">
        தமிழ் மாணவர்கள் தொழில்நுட்பத்தைக் கற்றுக்கொண்டு,
        தங்கள் எதிர்காலத்திற்குத் தேவையான திறன்களை
        வளர்த்துக்கொள்ள உதவுவதே இந்த முயற்சியின் நோக்கம்.
      </p>

      <div className="deep-footer-buttons">

        <button
          onClick={() => {
            window.open(
              "https://deepakl.dev",
              "_blank"
            );
          }}
          className="deep-footer-blue-btn"
        >
          👨‍💻 More about DEEPAK
        </button>

        <button
          onClick={() => {
            window.open(
              "https://deepakl.dev",
              "_blank"
            );
          }}
          className="deep-footer-pink-btn"
        >
          🌐 To Build Websites
        </button>

      </div>

    </div>

  </div>


  {/* ================= COPYRIGHT ================= */}

  <div className="deep-footer-bottom">

    <div className="deep-footer-line"></div>

    <p>
      © 2026 DEEPEX • Designed & Developed by DEEPAK L.
    </p>

    <p className="deep-footer-tamil">
      தமிழ் மாணவர்களின் வளர்ச்சிக்காக உருவாக்கப்பட்டது.
    </p>

  </div>

</footer>

    </div>
  );
}

export default Deep;