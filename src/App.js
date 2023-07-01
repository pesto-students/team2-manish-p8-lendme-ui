import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/landing-page";
import LoanRequestForm from "./pages/loan-request-form";
import EditProfilePage from "./pages/edit-profile-page";
import ProfilePage from "./pages/profile-page";
import LoanDetailPage from "./pages/loan-detail-page";
import LoggedInLandingLoansList from "./pages/logged-in-landing-loans-list";
import SignupPage from "./pages/signup-page";
import LoginPage from "./pages/login-page";
import PortfolioPage from "./pages/portfolio-page";
import ExistingLoanDetailPage from "./pages/existing-loan-detail-page";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/loanrequestform":
        title = "";
        metaDescription = "";
        break;
      case "/editprofilepage":
        title = "";
        metaDescription = "";
        break;
      case "/profilepage":
        title = "";
        metaDescription = "";
        break;
      case "/loandetailpage":
        title = "";
        metaDescription = "";
        break;
      case "/loggedinlandingloanslist":
        title = "";
        metaDescription = "";
        break;
      case "/signuppage":
        title = "";
        metaDescription = "";
        break;
      case "/loginpage":
        title = "";
        metaDescription = "";
        break;
      case "/portfoliopage":
        title = "";
        metaDescription = "";
        break;
      case "/existingloandetailpage":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/loanrequestform" element={<LoanRequestForm />} />
      <Route path="/editprofilepage" element={<EditProfilePage />} />
      <Route path="/profilepage" element={<ProfilePage />} />
      <Route path="/loandetailpage" element={<LoanDetailPage />} />
      <Route
        path="/loggedinlandingloanslist"
        element={<LoggedInLandingLoansList />}
      />
      <Route path="/signuppage" element={<SignupPage />} />
      <Route path="/loginpage" element={<LoginPage />} />
      <Route path="/portfoliopage" element={<PortfolioPage />} />
      <Route
        path="/existingloandetailpage"
        element={<ExistingLoanDetailPage />}
      />
    </Routes>
  );
}
export default App;
