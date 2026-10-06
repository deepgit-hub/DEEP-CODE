import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

function DeepLearnConcept() {
  const { categoryId, conceptId } = useParams();

  const [concept, setConcept] = useState(null);

  useEffect(() => {
    async function fetchConcept() {
      try {
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
        }
      } catch (error) {
        console.error("Failed to fetch concept:", error);
      }
    }

    fetchConcept();
  }, [categoryId, conceptId]);

  if (!concept) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>🎓 DEEP LEARN</h1>

      <h2>{concept.title}</h2>

      <h3>🇬🇧 English</h3>
      <p>{concept.englishExplanation}</p>

      <h3>🇮🇳 தமிழ்</h3>
      <p>{concept.tamilExplanation}</p>
    </div>
  );
}

export default DeepLearnConcept;