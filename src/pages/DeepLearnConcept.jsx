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
    <div>
      <h1>🎓 DEEP LEARN</h1>

      <h2>{concept.title}</h2>

      {/* Understand */}
      <section>
        <h2>🧠 Understand</h2>

        <h3>🇬🇧 English</h3>
        <p>{concept.understand?.english}</p>

        <h3>🇮🇳 தமிழ்</h3>
        <p>{concept.understand?.tamil}</p>
      </section>

      {/* See the Situation */}
      <section>
        <h2>🌍 See the Situation</h2>

        <h3>🇬🇧 English</h3>
        <p>{concept.seeTheSituation?.english}</p>

        <h3>🇮🇳 தமிழ்</h3>
        <p>{concept.seeTheSituation?.tamil}</p>
      </section>

      {/* Common Mistake */}
      <section>
        <h2>❌ Common Mistake</h2>

        <h3>🇬🇧 English</h3>
        <p>{concept.commonMistake?.english}</p>

        <h3>🇮🇳 தமிழ்</h3>
        <p>{concept.commonMistake?.tamil}</p>
      </section>

      {/* Better Approach */}
      <section>
        <h2>✅ Better Approach</h2>

        <h3>🇬🇧 English</h3>
        <p>{concept.betterApproach?.english}</p>

        <h3>🇮🇳 தமிழ்</h3>
        <p>{concept.betterApproach?.tamil}</p>
      </section>

      {/* Useful Expressions */}
      <section>
        <h2>💬 Useful Expressions</h2>

        {concept.usefulExpressions?.map(
          (expression, index) => (
            <div key={index}>
              <p>
                🇬🇧 <strong>{expression.english}</strong>
              </p>

              <p>
                🇮🇳 {expression.tamil}
              </p>
            </div>
          )
        )}
      </section>

      {/* Try Yourself */}
      <section>
        <h2>🎯 Try Yourself</h2>

        <h3>🇬🇧 English</h3>
        <p>{concept.tryYourself?.english}</p>

        <h3>🇮🇳 தமிழ்</h3>
        <p>{concept.tryYourself?.tamil}</p>
      </section>

      {/* Temporary */}
      <button>
        ☑️ Mark as Learned
      </button>
    </div>
  );
}

export default DeepLearnConcept;