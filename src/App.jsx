import { Routes, Route } from "react-router-dom";

// DEEP CODE
import Languages from "./pages/Languages";
import Home from "./pages/Home";
import Topic from "./pages/Topic";
import Question from "./pages/Question";
import QuestionDetails from "./pages/QuestionDetails";

// Authentication / Entry
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import ChooseLanguage from "./pages/ChooseLanguage";

// DEEPEX
import Deep from "./pages/Deep";

// DEEP LEARN
import DeepLearn from "./pages/DeepLearn";
import DeepLearnCategory from "./pages/DeepLearnCategory";
import DeepLearnConcept from "./pages/DeepLearnConcept";

function App() {
  return (
    <Routes>

      {/* =========================
          Authentication
      ========================= */}

      <Route
        path="/"
        element={<Login />}
      />

      {/* =========================
          DEEPEX
      ========================= */}

      <Route
        path="/deep"
        element={<Deep />}
      />

      {/* =========================
          DEEP LEARN
      ========================= */}

      <Route
        path="/deep-learn"
        element={<DeepLearn />}
      />

      <Route
        path="/deep-learn/:categoryId"
        element={<DeepLearnCategory />}
      />

      <Route
        path="/deep-learn/:categoryId/:conceptId"
        element={<DeepLearnConcept />}
      />

      {/* =========================
          DEEP CODE - Entry
      ========================= */}

      <Route
        path="/choose-language"
        element={<ChooseLanguage />}
      />

      <Route
        path="/welcome"
        element={<Welcome />}
      />

      <Route
        path="/languages"
        element={<Languages />}
      />

      {/* =========================
          DEEP CODE - Learning
      ========================= */}

      <Route
        path="/home/:languageId"
        element={<Home />}
      />

      <Route
        path="/topic/:languageId/:topicId"
        element={<Topic />}
      />

      <Route
        path="/questions/:languageId/:topicId"
        element={<Question />}
      />

      <Route
        path="/question/:languageId/:topicId/:questionId"
        element={<QuestionDetails />}
      />

    </Routes>
  );
}

export default App;