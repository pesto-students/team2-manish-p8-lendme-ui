export const urlRoutes = {
  landingPage: "/",
  loanRequestForm: "/loanrequestform",
  editProfilePage: "/editprofilepage",
  profilePage: "/profilepage",
  loanDetailPage: "/loandetailpage",
  loggedInLandingLoansList: "/loggedinlandingloanslist",
  signupPage: "/signuppage",
  loginPage: "/loginpage",
  portfolioPage: "/portfoliopage",
  existingLoanDetailPage: "/existingloandetailpage",
};

export const loanStatus = {
  REQUESTED: "REQUESTED",
  EXPIRED: "EXPIRED",
  ACTIVE: "ACTIVE",
  COMPLETED: "COMPLETED",
  DISABLED: "DISABLED",
};

export const mockGetPortfolioByUserIdData = {
  lentLoansCount: 11,
  borrowedLoansCount: 11,
  completedLoansCount: 11,
  totalInterestGained: 23983.65,
  totalInterestPaid: 11344.8,
  emiPaidAsBorrower: 23,
  emiPendingAsBorrower: 4,
  emiReceivedAsLender: 23,
  emiPendingAsLender: 4,
  walletBalance: 65789.55,
  loans: [
    {
      id: 1,
      loanType: "LEND",
      secondParty: {
        id: 1,
        lastName: "pathade",
        firstName: "akash",
        email: "akash@g.com",
        mobile: "9988998899",
        createdAt: "2023-06-18T09:45:30.819Z",
        updatedAt: "2023-06-18T09:45:30.819Z",
      },
      principal: 33672.55,
      interestRate: 6.75,
      loanStatus: "COMPLETED",
      agreementUrl: "url link here",
    },
    {
      id: 1,
      loanType: "BORROW",
      secondParty: {
        id: 1,
        lastName: "pathade",
        firstName: "akash",
        email: "akash@g.com",
        mobile: "9988998899",
        createdAt: "2023-06-18T09:45:30.819Z",
        updatedAt: "2023-06-18T09:45:30.819Z",
      },
      principal: 33672.55,
      interestRate: 6.75,
      loanStatus: "ACTIVE",
      agreementUrl: "url link here",
    },
  ],
};
