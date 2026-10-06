import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function DeepLearnCategory() {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  const [concepts, setConcepts] = useState([]);

  useEffect(() => {
    async function fetchConcepts() {
      try {
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
          .sort((a, b) => a.order - b.order);

        setConcepts(data);
      } catch (error) {
        console.error("Failed to fetch concepts:", error);
      }
    }

    fetchConcepts();
  }, [categoryId]);

  return (
    <div>
      <h1>🎓 DEEP LEARN</h1>

      <h2>{categoryId?.toUpperCase()}</h2>

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
          <h3>{concept.title}</h3>

          <p>{concept.englishExplanation}</p>
        </div>
      ))}
    </div>
  );
}

export default DeepLearnCategory;