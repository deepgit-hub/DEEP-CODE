import TopicCard from "../components/TopicCard";
import MentorSupport from "../components/MentorSupportButton";
import ThingsToRemember from "../components/ThingsToRemember";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  collection,
  getDocs,
  doc,
  getDoc,
} from "firebase/firestore";

import { db } from "../firebase";

import {
  Languages,
  Globe2,
  CodeXml,
} from "lucide-react";

import "../styles/Home.css";


function Home() {

  const navigate = useNavigate();

  const { languageId } = useParams();

  const [topics, setTopics] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");

  const [student, setStudent] = useState(null);

  const [showRemember, setShowRemember] = useState(false);


  useEffect(() => {

    async function fetchTopics() {

      const snapshot = await getDocs(
        collection(
          db,
          "languages",
          languageId,
          "concepts"
        )
      );

      const data = snapshot.docs
        .map((doc) => ({
          id: Number(doc.id),
          ...doc.data(),
        }))
        .sort((a, b) => a.id - b.id);

      setTopics(data);

    }


    async function fetchStudent() {

      const currentStudent = JSON.parse(
        localStorage.getItem("student")
      );

      if (!currentStudent) return;

      const studentRef = doc(
        db,
        "students",
        currentStudent.username
      );

      const studentSnap = await getDoc(studentRef);

      if (studentSnap.exists()) {

        const data = studentSnap.data();

        console.log(data.completedTopics);

        setStudent(data);

        localStorage.setItem(
          "student",
          JSON.stringify(data)
        );

      }

    }


    fetchTopics();

    fetchStudent();

  }, [languageId]);


  /* ================= SEARCH ================= */

  const filteredTopics = topics.filter((topic) =>
    topic.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );


  /* ================= LANGUAGE-SPECIFIC PROGRESS ================= */

const completedTopicsByLanguage =
  student?.completedTopicsByLanguage || {};

const currentLanguageTopics =
  completedTopicsByLanguage[languageId] || [];

const completedCount = currentLanguageTopics.length;

const progress =
  topics.length > 0
    ? Math.round(
        (completedCount / topics.length) * 100
      )
    : 0;


  return (

    <div className="home-page">

      <div className="container">


        {/* ================= HERO ================= */}

        <section className="hero">

          <span className="hero-badge">
            🚀 A Learning Platform by your Supreme Senior DEEPAK
          </span>


          <h1 className="hero-title">

            Master {languageId?.toUpperCase()} Through Real Learning,

            <br />

            Not Just Theory.

          </h1>


          <p className="hero-description">

            Welcome to a bilingual coding platform where every concept is
            taught in both <strong>English</strong> and <strong>Tamil</strong>.
            Learn with simple explanations, real-world applications,
            practical examples, coding exercises, and challenge questions.

          </p>


          <p className="hero-description">

            This platform helps students understand not only
            <strong> how to code</strong>, but also
            <strong> where</strong>,
            <strong> why</strong>, and
            <strong> when</strong> every concept is used in real software
            development.

          </p>


          <div className="hero-features">


            <div className="feature-card">

              <div className="feature-header">

                <Languages className="feature-icon" />

                <h3>Bilingual Learning</h3>

              </div>


              <p>

                Every concept is explained in both English and Tamil.

              </p>

            </div>



            <div className="feature-card">

              <div className="feature-header">

                <Globe2 className="feature-icon" />

                <h3>Real-World Applications</h3>

              </div>


              <p>

                Learn where every programming concept is used in industry.

              </p>

            </div>



            <div className="feature-card">

              <div className="feature-header">

                <CodeXml className="feature-icon" />

                <h3>Practice as You Learn</h3>

              </div>


              <p>

                Strengthen your understanding through coding questions.

              </p>

            </div>


          </div>

        </section>



        {/* ================= TOPICS ================= */}

        <section className="topics-section">


          <div className="section-header">

            <h2>

              📚 {languageId?.toUpperCase()} Learning Hub

            </h2>


            <p>

              Explore every topic and track your learning progress.

            </p>

          </div>



          {/* ================= LEARNING HUB ACTIONS ================= */}

<div className="remember-button-container">

  <button
    className="remember-btn"
    onClick={() => setShowRemember(true)}
  >
    📌 Things to Remember
  </button>

  <button
    className="remember-btn"
    onClick={() => navigate("/choose-language")}
  >
    🌐 Switch Language
  </button>

</div>


          {/* ================= SEARCH ================= */}

          <div className="topic-search">

            <span className="search-icon">
              🔍
            </span>


            <input
              type="text"
              placeholder={`Search ${languageId?.toUpperCase()} topics...`}
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
            />

          </div>



          {/* ================= PROGRESS ================= */}

          <div className="progress-card">


            <div className="progress-top">

              <h3>
                📈 Overall Progress
              </h3>


              <span className="progress-percent">

                {progress}%

              </span>

            </div>



            <div className="progress-bar">

              <div
                className="progress-fill"
                style={{
                  width: `${progress}%`,
                }}
              ></div>

            </div>



            <div className="progress-bottom">


              <p>

                <strong>

                  {student
                    ? student.completedTopics.length
                    : 0}

                </strong>


                {" / "}


                <strong>

                  {topics.length}

                </strong>


                {" Topics Completed"}

              </p>



              <p className="progress-message">

                {student && topics.length > 0

                  ? `🚀 Keep going! You've completed ${student.completedTopics.length} of ${topics.length} topics.`

                  : "Loading your progress..."}

              </p>


            </div>

          </div>



          {/* ================= TOPICS ================= */}

          <div className="topics-grid">


            {filteredTopics.map((topic) => (

              <TopicCard

                key={topic.id}

                title={topic.title}

                completed={
                  student?.completedTopics?.includes(topic.id)
                }

                onClick={() =>
                  navigate(
                    `/topic/${languageId}/${topic.id}`
                  )
                }

              />

            ))}


          </div>


        </section>



        {/* ================= THINGS TO REMEMBER POPUP ================= */}

        <ThingsToRemember

          isOpen={showRemember}

          onClose={() =>
            setShowRemember(false)
          }

          language={languageId}

        />


        <MentorSupport />


      </div>



      {/* ================= FOOTER ================= */}

      <footer className="footer">


        <div className="footer-container">


          <div className="footer-left">

            <h2>
              🌾 DEEP CODE
            </h2>


            <p>

              Empowering Tamil students to rise, innovate,
              and lead the future of technology.

            </p>


            <p className="footer-quote">

              "From Tamil classrooms to global companies —
              your journey starts with a single line of code."

            </p>


            <p className="footer-quote">

              Every expert programmer was once a beginner.
              Start today, stay consistent, and let your code
              speak for itself.

            </p>

          </div>



          <div className="footer-center">

            <h3>
              👨‍💻 About the Developer
            </h3>


            <p>

              Hi! I'm <strong>Deepak</strong>, a Computer Science
              student passionate about helping Tamil students
              learn programming through simple explanations,
              practical coding exercises, and real-world examples.

            </p>

          </div>



          <div className="footer-right">


            <div className="footer-buttons">


              <button

                className="portfolio-btn1"

                onClick={() =>
                  window.open(
                    "https://deepgit-hub.github.io/Digital-Portfolio/",
                    "_blank"
                  )
                }

              >

                👨‍💻 More about DEEPAK

              </button>



              <button

                className="portfolio-btn2"

                onClick={() =>
                  window.open(
                    "https://thequeenslab.vercel.app/",
                    "_blank"
                  )
                }

              >

                🌏︎ To Build Websites

              </button>


            </div>

          </div>


        </div>



        <hr />


        <p className="copyright">

          © 2026 DEEP CODE • Designed & Developed by DEEPAK L

        </p>


      </footer>


    </div>

  );

}


export default Home;
