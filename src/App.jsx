import { Routes, Route } from "react-router-dom";

import Languages from "./pages/Languages";
import Home from "./pages/Home";
import Topic from "./pages/Topic";
import Question from "./pages/Question";
import QuestionDetails from "./pages/QuestionDetails";
import Login from "./pages/Login";
import Welcome from "./pages/Welcome";
import ChooseLanguage from "./pages/ChooseLanguage";
import Deep from "./pages/Deep";
import DeepLearn from "./pages/DeepLearn";

function App() {
  return (
    <Routes>

      {/* Login */}
      <Route
        path="/"
        element={<Login />}
      />
      <Route 
        path="/deep" 
        element={<Deep />} 
      />
      {/* Choose Language */}
      <Route
        path="/choose-language"
        element={<ChooseLanguage />}
      />

      {/* Welcome */}
      <Route
        path="/welcome"
        element={<Welcome />}
      />

      {/* Languages */}
      <Route
        path="/languages"
        element={<Languages />}
      />

      {/* Home */}
      <Route
        path="/home/:languageId"
        element={<Home />}
      />

      {/* Topic */}
      <Route
        path="/topic/:languageId/:topicId"
        element={<Topic />}
      />

      {/* Questions */}
      <Route
        path="/questions/:languageId/:topicId"
        element={<Question />}
      />

      {/* Question Details */}
      <Route
        path="/question/:languageId/:topicId/:questionId"
        element={<QuestionDetails />}
      />

    </Routes>
  );
}

export default App;