import { useParams } from "react-router-dom";

function DeepLearnCategory() {
  const { categoryId } = useParams();

  return (
    <div>
      <h1>🎓 DEEP LEARN</h1>

      <h2>
        {categoryId?.toUpperCase()}
      </h2>

      <p>
        This section is under development.
      </p>
    </div>
  );
}

export default DeepLearnCategory;