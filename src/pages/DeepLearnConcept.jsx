import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import "../styles/DeepLearnConcept.css";

function DeepLearnConcept() {
  const { categoryId, conceptId } = useParams();

  const [concept, setConcept] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchConcept() {
      try {
        setLoading(true);
        setError("");

        const conceptRef = doc(
          db,
          "deepLearn",
          categoryId,
          "concepts",
          conceptId
        );

        const conceptSnap = await getDoc(conceptRef);

        if (conceptSnap.exists()) {
          setConcept(conceptSnap.data());
        } else {
          setError("Concept not found.");
        }
      } catch (error) {
        console.error("Failed to fetch concept:", error);
        setError("Failed to load concept.");
      } finally {
        setLoading(false);
      }
    }

    fetchConcept();
  }, [categoryId, conceptId]);

  if (loading) {
    return <h2>Loading concept...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
  <div className="deep-concept-page">

    <div className="deep-concept-header">

      <div className="deep-concept-brand">
        DEEPEX · DEEP LEARN
      </div>

      <h1>{concept.title}</h1>

      <p>
        Learn → Understand → Apply
      </p>

    </div>

    <div className="deep-concept-content">

      {/* Understand */}

      <section className="deep-learning-section">

        <h2>🧠 Understand</h2>

        <div className="deep-language-block">

          <div className="deep-language-label">
            🇬🇧 English
          </div>

          <p>
            {concept.understand?.english}
          </p>

        </div>

        <div className="deep-language-block">

          <div className="deep-language-label">
            🇮🇳 தமிழ்
          </div>

          <p>
            {concept.understand?.tamil}
          </p>

        </div>

      </section>


      {/* See the Situation */}

      <section className="deep-learning-section">

        <h2>🌍 See the Situation</h2>

        <div className="deep-language-block">

          <div className="deep-language-label">
            🇬🇧 English
          </div>

          <p>
            {concept.seeTheSituation?.english}
          </p>

        </div>

        <div className="deep-language-block">

          <div className="deep-language-label">
            🇮🇳 தமிழ்
          </div>

          <p>
            {concept.seeTheSituation?.tamil}
          </p>

        </div>

      </section>


      {/* Common Mistake */}

      <section className="deep-learning-section">

        <h2>❌ Common Mistake</h2>

        <div className="deep-language-block">

          <div className="deep-language-label">
            🇬🇧 English
          </div>

          <p>
            {concept.commonMistake?.english}
          </p>

        </div>

        <div className="deep-language-block">

          <div className="deep-language-label">
            🇮🇳 தமிழ்
          </div>

          <p>
            {concept.commonMistake?.tamil}
          </p>

        </div>

      </section>


      {/* Better Approach */}

      <section className="deep-learning-section">

        <h2>✅ Better Approach</h2>

        <div className="deep-language-block">

          <div className="deep-language-label">
            🇬🇧 English
          </div>

          <p>
            {concept.betterApproach?.english}
          </p>

        </div>

        <div className="deep-language-block">

          <div className="deep-language-label">
            🇮🇳 தமிழ்
          </div>

          <p>
            {concept.betterApproach?.tamil}
          </p>

        </div>

      </section>


      {/* Useful Expressions */}

      <section className="deep-learning-section">

        <h2>💬 Useful Expressions</h2>

        {concept.usefulExpressions?.map(
          (expression, index) => (

            <div
              className="deep-expression"
              key={index}
            >

              <p className="deep-expression-english">
                🇬🇧 <strong>
                  {expression.english}
                </strong>
              </p>

              <p className="deep-expression-tamil">
                🇮🇳 {expression.tamil}
              </p>

            </div>

          )
        )}

      </section>


      {/* Try Yourself */}

      <section className="deep-learning-section">

        <h2>🎯 Try Yourself</h2>

        <div className="deep-language-block">

          <div className="deep-language-label">
            🇬🇧 English
          </div>

          <p>
            {concept.tryYourself?.english}
          </p>

        </div>

        <div className="deep-language-block">

          <div className="deep-language-label">
            🇮🇳 தமிழ்
          </div>

          <p>
            {concept.tryYourself?.tamil}
          </p>

        </div>

      </section>


      <button className="deep-learned-button">
        ☑️ Mark as Learned
      </button>

    </div>

  </div>
);
}

export default DeepLearnConcept;