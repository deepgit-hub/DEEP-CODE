import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

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
    return <h2>Loading concepts...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h1>🎓 DEEP LEARN</h1>

      <h2>
        {categoryId?.charAt(0).toUpperCase() +
          categoryId?.slice(1)}{" "}
        Skills
      </h2>

      <p>
        Choose a concept and start learning.
      </p>

      {concepts.map((concept) => (
        <div
          key={concept.id}
          onClick={() =>
            navigate(
              `/deep-learn/${categoryId}/${concept.id}`
            )
          }
          style={{
            cursor: "pointer",
            border: "1px solid #ccc",
            padding: "15px",
            margin: "10px 0",
          }}
        >
          <h3>
            {concept.conceptId}. {concept.title}
          </h3>

          <p>
            {concept.understand?.english}
          </p>
        </div>
      ))}
    </div>
  );
}

export default DeepLearnCategory;