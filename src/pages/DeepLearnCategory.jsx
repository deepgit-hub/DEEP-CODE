import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {collection,getDocs,} from "firebase/firestore";
import { db } from "../firebase";
import { useNavigate } from "react-router-dom";

function DeepLearnCategory() {
  const { categoryId } = useParams();

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

      <h2>
        {categoryId?.toUpperCase()}
      </h2>

      {concepts.map((concept) => (
        <div key={concept.id}>
          <h3>{concept.title}</h3>

          <p>
            🇬🇧 {concept.englishExplanation}
          </p>

          <p>
            🇮🇳 {concept.tamilExplanation}
          </p>
        </div>
      ))}
    </div>
  );
}

export default DeepLearnCategory;