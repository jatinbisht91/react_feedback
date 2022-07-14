import logo from "./logo.svg";
import Header from "./components/Header";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackList from "./components/FeedbackList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FeedbackProvider } from "./Context/FeedbackContext";
function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
              </>
            }
          />
        </Routes>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
