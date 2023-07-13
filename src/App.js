import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
  useNavigate,
} from "react-router-dom";
import LandingPage from "./pages/landing-page";
import LoanRequestForm from "./pages/loan-request-form";
import ProfilePage from "./pages/profile-page";
import LoanDetailPage from "./pages/loan-detail-page";
import LoggedInLandingLoansList from "./pages/logged-in-landing-loans-list";
import SignupPage from "./pages/signup-page";
import LoginPage from "./pages/login-page";
import PortfolioPage from "./pages/portfolio-page";
import { useEffect } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { urlRoutes } from "./constants";
import ExistingLoanDetail from "./pages/existing-loan-detail";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
    const token = localStorage.getItem("accessToken");

    if (
      !token &&
      ![urlRoutes.signupPage, urlRoutes.landingPage].includes(pathname)
    ) {
      navigate(urlRoutes.loginPage);
    }
    if (
      token &&
      [
        urlRoutes.loginPage,
        urlRoutes.signupPage,
        urlRoutes.landingPage,
      ].includes(pathname)
    ) {
      navigate(urlRoutes.loggedInLandingLoansList);
    }
  }, [action, pathname]);

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/loanrequestform" element={<LoanRequestForm />} />
        <Route path="/profilepage" element={<ProfilePage />} />
        <Route path="/loandetailpage/:id" element={<LoanDetailPage />} />
        <Route
          path="/loggedinlandingloanslist"
          element={<LoggedInLandingLoansList />}
        />
        <Route path="/signuppage" element={<SignupPage />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/portfoliopage" element={<PortfolioPage />} />
        <Route
          path="/existingLoanDetail/:id"
          element={<ExistingLoanDetail />}
        />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </LocalizationProvider>
  );
}
export default App;
