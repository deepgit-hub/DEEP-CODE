import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import MentorSupport from "../components/MentorSupportButton";
import "../styles/Topic.css";
import SetupGuide from "../components/SetupGuide";

function Topic() {
  const navigate = useNavigate();
  

const { languageId, topicId } = useParams();

const [topic, setTopic] = useState(null);
const [showSetupGuide, setShowSetupGuide] =
  useState(false);
const student = JSON.parse(
  localStorage.getItem("student")
);
  useEffect(() => {
  async function fetchTopic() {
    const topicRef = doc(
      db,
      "languages",
      languageId,
      "concepts",
      topicId
    );

    const topicSnap = await getDoc(topicRef);

    if (topicSnap.exists()) {
      setTopic(topicSnap.data());
    }
  }

  fetchTopic();
}, [languageId, topicId]);

if (!topic) {
  return <h2>Loading...</h2>;
}
const completedTopicsByLanguage =
  student?.completedTopicsByLanguage || {};

const currentLanguageTopics =
  completedTopicsByLanguage[languageId] || [];

const isCompleted = currentLanguageTopics.includes(
  Number(topicId)
);
const handleMarkAsLearned = async () => {
  try {

    let updatedTopics;

    if (isCompleted) {

      // Mark as Unread
      updatedTopics = student.completedTopics.filter(
        (id) => id !== Number(topicId)
      );

    } else {

      // Mark as Learned
      updatedTopics = [
        ...student.completedTopics,
        Number(topicId),
      ];

    }

    const updatedTotal = updatedTopics.length;

    await updateDoc(
      doc(db, "students", student.username),
      {
        completedTopics: updatedTopics,
        totalCompleted: updatedTotal,
      }
    );

    student.completedTopics = updatedTopics;
    student.totalCompleted = updatedTotal;

    localStorage.setItem(
      "student",
      JSON.stringify(student)
    );

    alert(
      isCompleted
        ? "↩️ Topic marked as Unread."
        : "🎉 Topic marked as Learned!"
    );

    window.location.reload();

  } catch (error) {
    console.error(error);
    alert("❌ Failed to update progress.");
  }
};
  return (
    <div className="topic-page">
      <div className="container">

        {/* Header */}

        <div className="topic-header">

          <button
            className="back-btn"
           onClick={() => navigate(`/home/${languageId}`)}
          >
            ← Back
          </button>

          <h1 className="topic-title">{topic.title}</h1>

        </div>

        {/* English */}

        <div className="topic-section">

          <h2>📖 English Definition</h2>

          <p>{topic.englishDefinition}</p>

        </div>

        {/* Tamil */}

        <div className="topic-section">

          <h2>📖 Tamil Definition</h2>

          <p>{topic.tamilDefinition}</p>

        </div>

        {/* Real World */}

        <div className="topic-section">

          <h2>🌍 Real World Usage</h2>

          <p>{topic.realWorldUsage}</p>

        </div>

        {/* Tamil Real World */}

        <div className="topic-section">

          <h2>🌍 நிஜ வாழ்க்கையில் பயன்பாடு</h2>

          <p>{topic.realWorldUsageTamil}</p>

        </div>

        {/* Syntax */}

        <div className="topic-section">

          <h2>💻 Syntax</h2>

          <pre className="code-box">
            <code>{topic.syntax}</code>
          </pre>

        </div>

        {/* Syntax Explanation English */}

        <div className="topic-section">

          <h2>📘 Syntax Explanation (English)</h2>

          <ul className="topic-list">

            {topic.syntaxExplanationEnglish.map((item, index) => (

              <li key={index}>{item}</li>

            ))}

          </ul>

        </div>

        {/* Syntax Explanation Tamil */}

        <div className="topic-section">

          <h2>📗 Syntax Explanation (Tamil)</h2>

          <ul className="topic-list">

            {topic.syntaxExplanationTamil.map((item, index) => (

              <li key={index}>{item}</li>

            ))}

          </ul>

        </div>

        {/* Example Program */}

        <div className="topic-section">

          <h2>🖥 Example Program</h2>

          <pre className="code-box">
            <code>{topic.exampleProgram}</code>
          </pre>

        </div>

        {/* Program Explanation English */}

        <div className="topic-section">

          <h2>📘 Program Explanation (English)</h2>

          <ul className="topic-list">

            {topic.programExplanationEnglish.map((item, index) => (

              <li key={index}>{item}</li>

            ))}

          </ul>

        </div>

        {/* Program Explanation Tamil */}

        <div className="topic-section">

          <h2>📗 Program Explanation (Tamil)</h2>

          <ul className="topic-list">

            {topic.programExplanationTamil.map((item, index) => (

              <li key={index}>{item}</li>

            ))}

          </ul>

        </div>

        {/* Output */}

        <div className="topic-section">

          <h2>🖥 Output</h2>

          <pre className="code-box">
            <code>{topic.output}</code>
          </pre>

        </div>

        {/* Buttons */}

        <div className="topic-buttons">
<button
  className="setup-btn"
  onClick={() => setShowSetupGuide(true)}
>
  🚀 Get Your PC Ready
</button> 
          <button
            className="topic-start-btn"
            onClick={() => navigate(`/questions/${languageId}/${topicId}`)}
          >
            🚀 Start Coding
          </button>

          <button
  className="topic-complete-btn"
  onClick={handleMarkAsLearned}
>
  {isCompleted
    ? "↩️ Mark as Unread"
    : "✅ Mark as Learned"}
</button>
<SetupGuide
  isOpen={showSetupGuide}
  onClose={() => setShowSetupGuide(false)}
  language={languageId}
/>
        </div>

      </div>

        <MentorSupport />

    </div>
  );
}

export default Topic;