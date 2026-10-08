import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import "../styles/DeepLearnCategory.css";

function DeepLearnCategory() {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const [concepts, setConcepts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchConcepts() {
      try {
        setLoading(true);
        setError("");

        const conceptsRef = collection(
          db,
          "deepLearn",
          categoryId,
          "concepts"
        );

        const snapshot = await getDocs(conceptsRef);

        const data = snapshot.docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          .sort((a, b) => a.conceptId - b.conceptId);

        setConcepts(data);
      } catch (error) {
        console.error("Failed to fetch concepts:", error);
        setError("Failed to load concepts.");
      } finally {
        setLoading(false);
      }
    }

    fetchConcepts();
  }, [categoryId]);

  if (loading) {
  return (
    <div className="deep-loading">
      <h2>Loading concepts...</h2>
    </div>
  );
}

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
  <div className="deep-category-page">

    <div className="deep-category-header">

      <div className="deep-category-brand">
        DEEPEX · DEEP LEARN
      </div>

      <h1>
        {categoryId?.charAt(0).toUpperCase() +
          categoryId?.slice(1)}{" "}
        Skills
      </h1>

      <p>
        Choose a concept and start learning.
      </p>

    </div>

    <div className="deep-concepts-list">

      {concepts.map((concept) => (
        <div
          key={concept.id}
          className="deep-concept-card"
          onClick={() =>
            navigate(
              `/deep-learn/${categoryId}/${concept.id}`
            )
          }
        >

          <div className="deep-concept-number">
            CONCEPT {concept.conceptId}
          </div>

          <h3>{concept.title}</h3>

          <p className="deep-concept-preview">
            {concept.understand?.english}
          </p>

        </div>
      ))}

    </div>

  </div>
);
}

export default DeepLearnCategory;