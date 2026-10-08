import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import "../styles/DeepLearnConcept.css";

function DeepLearnConcept() {
  const { categoryId, conceptId } = useParams();
  const navigate = useNavigate();

  const [concept, setConcept] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchConcept = async () => {
      try {
        setLoading(true);

        const conceptRef = doc(
          db,
          "deepLearn",
          categoryId,
          "concepts",
          conceptId
        );

        const conceptSnap = await getDoc(conceptRef);

        if (conceptSnap.exists()) {
          setConcept({
            id: conceptSnap.id,
            ...conceptSnap.data(),
          });
        } else {
          setError("Concept not found.");
        }
      } catch (err) {
        console.error(err);
        setError("Unable to load this concept.");
      } finally {
        setLoading(false);
      }
    };

    fetchConcept();
  }, [categoryId, conceptId]);

  const categoryNames = {
    communication: "Communication Skills",
    interview: "Interview Skills",
    workplace: "Workplace Skills",
    professional: "Professional Skills",
    personal: "Personal Skills",
  };

  const categoryName =
    categoryNames[categoryId] || "DEEP LEARN";

  if (loading) {
    return (
      <div className="deep-concept-loading">
        <h2>Loading concept...</h2>
      </div>
    );
  }

  if (error || !concept) {
    return (
      <div className="deep-concept-loading">
        <h2>{error || "Concept not found."}</h2>
      </div>
    );
  }

  return (
    <div className="deep-concept-page">

      {/* ================= HEADER ================= */}

      <section className="deep-concept-header">

        <button
          className="deep-concept-back-btn"
          onClick={() =>
            navigate(`/deep-speak/${categoryId}`)
          }
        >
          ← Back to {categoryName}
        </button>

        <div className="deep-concept-badge">
          Concept {concept.conceptId}
        </div>

        <h1>{concept.title}</h1>

        <p>{categoryName}</p>

      </section>


      {/* ================= CONTENT ================= */}

      <section className="deep-concept-content">

        {/* UNDERSTAND */}

        <div className="deep-learning-section">

          <h2>
            🧠 Understand
          </h2>

          <div className="deep-language-block">

            <div className="deep-language-label">
              English
            </div>

            <p>
              {concept.understand?.english}
            </p>

          </div>

          <div className="deep-language-block">

            <div className="deep-language-label">
              தமிழ்
            </div>

            <p>
              {concept.understand?.tamil}
            </p>

          </div>

        </div>


        {/* SEE THE SITUATION */}

        <div className="deep-learning-section">

          <h2>
            🎭 See the Situation
          </h2>

          <div className="deep-language-block">

            <div className="deep-language-label">
              English
            </div>

            <p>
              {concept.seeTheSituation?.english}
            </p>

          </div>

          <div className="deep-language-block">

            <div className="deep-language-label">
              தமிழ்
            </div>

            <p>
              {concept.seeTheSituation?.tamil}
            </p>

          </div>

        </div>


        {/* COMMON MISTAKE */}

        <div className="deep-learning-section mistake-section">

          <h2>
            ⚠️ Common Mistake
          </h2>

          <div className="deep-language-block">

            <div className="deep-language-label">
              English
            </div>

            <p>
              {concept.commonMistake?.english}
            </p>

          </div>

          <div className="deep-language-block">

            <div className="deep-language-label">
              தமிழ்
            </div>

            <p>
              {concept.commonMistake?.tamil}
            </p>

          </div>

        </div>


        {/* BETTER APPROACH */}

        <div className="deep-learning-section better-section">

          <h2>
            ✅ Better Approach
          </h2>

          <div className="deep-language-block">

            <div className="deep-language-label">
              English
            </div>

            <p>
              {concept.betterApproach?.english}
            </p>

          </div>

          <div className="deep-language-block">

            <div className="deep-language-label">
              தமிழ்
            </div>

            <p>
              {concept.betterApproach?.tamil}
            </p>

          </div>

        </div>


        {/* USEFUL EXPRESSIONS */}

        <div className="deep-learning-section">

          <h2>
            💬 Useful Expressions
          </h2>

          <div className="deep-expressions">

            {concept.usefulExpressions?.map(
              (expression, index) => (
                <div
                  className="deep-expression"
                  key={index}
                >

                  <p className="deep-expression-english">
                    {expression.english}
                  </p>

                  <p className="deep-expression-tamil">
                    {expression.tamil}
                  </p>

                </div>
              )
            )}

          </div>

        </div>


        {/* TRY YOURSELF */}

        <div className="deep-learning-section try-section">

          <h2>
            🚀 Try Yourself
          </h2>

          <div className="deep-language-block">

            <div className="deep-language-label">
              English
            </div>

            <p>
              {concept.tryYourself?.english}
            </p>

          </div>

          <div className="deep-language-block">

            <div className="deep-language-label">
              தமிழ்
            </div>

            <p>
              {concept.tryYourself?.tamil}
            </p>

          </div>

        </div>


        {/* ACTION */}

        <div className="deep-concept-action">

          <button
            className="deep-concept-complete-btn"
            onClick={() =>
              navigate(`/deep-speak/${categoryId}`)
            }
          >
            ✓ Back to Concepts
          </button>

        </div>

      </section>

    </div>
  );
}

export default DeepLearnConcept;