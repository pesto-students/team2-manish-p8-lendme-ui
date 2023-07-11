import { useState } from "react";
import Header from "../components/header";
import "./portfolio-page.css";
import { loanStatus, mockGetPortfolioByUserIdData } from "../constants";
import { numberWithComma, numberWithCommaINR } from "../utils/number-utils";
import { getFullName } from "../utils/string-utils";
import Grid from "../meterial-ui-components/grid/grid";
const PortfolioPage = () => {
  const [portfolioData, setPortfolioData] = useState(
    mockGetPortfolioByUserIdData
  );

  const getLoansGridColumns = () => [
    { id: "srNo", label: "SR. NO.", minWidth: 80 },
    { id: "secondPartyName", label: "2nd PARTY NAME", minWidth: 150 },
    { id: "loanType", label: "LOAN TYPE", minWidth: 120 },
    { id: "principal", label: "PRINCIPAL", minWidth: 140 },
    { id: "interestRate", label: "INTEREST RATE", minWidth: 140 },
    { id: "loanStatus", label: "LOAN STATUS", minWidth: 140 },
    { id: "agreementUrl", label: "AGREEMENT", minWidth: 140 },
  ];

  const getLoanTypeBox = (type) => {
    if (type === "LEND") {
      return (
        <div className="green-wrapper">
          <div className="loan-type-text">LEND</div>
        </div>
      );
    } else if (type === "BORROW") {
      return (
        <div className="red-wrapper">
          <div className="loan-type-text">BORROW</div>
        </div>
      );
    }
  };

  const getLoanStatus = (status) => {
    if (status === loanStatus.COMPLETED) {
      return (
        <div className="green-wrapper">
          <div className="loan-type-text">{status}</div>
        </div>
      );
    } else if ([loanStatus.DISABLED, loanStatus.EXPIRED].includes(status)) {
      return (
        <div className="red-wrapper">
          <div className="loan-type-text">{status}</div>
        </div>
      );
    } else if ([loanStatus.ACTIVE, loanStatus.REQUESTED].includes(status)) {
      return (
        <div className="yellow-wrapper">
          <div className="loan-type-text">{status}</div>
        </div>
      );
    }
  };

  const handleAgreementClick = (url) => {
    console.log("url");
  };

  const getAgreementButton = (url) => {
    return (
      <div className="buttons6" onClick={() => handleAgreementClick(url)}>
        <img className="icon8" alt="" src="/icon3.svg" />
        <div className="button">Download PDF Report</div>
      </div>
    );
  };

  const prepareLoansGridData = (loans) => {
    return loans.map((loan, index) => {
      return {
        srNo: index + 1,
        secondPartyName: getFullName(
          loan.secondParty.firstName,
          loan.secondParty.lastName
        ),
        loanType: getLoanTypeBox(loan.loanType),
        principal: numberWithCommaINR(loan.principal || 0, true),
        interestRate: `${loan.interestRate || 0}%`,
        loanStatus: getLoanStatus(loan.loanStatus),
        agreementUrl: getAgreementButton(loan.agreementUrl),
      };
    });
  };

  return (
    <div className="portfoliopage">
      <Header isUserLoggedIn={true} />
      <div className="settings3">
        <div className="top8">
          <div className="icon-wrapper1">
            <img className="icon8" alt="" src="/icon1.svg" />
          </div>
          <div className="portfolio5">Portfolio</div>
        </div>
      </div>
      <div className="info2">
        <div className="content23">
          <b className="title15">{portfolioData.lentLoansCount || 0}</b>
          <div className="subtitle18">Loans Lent</div>
        </div>
      </div>
      <div className="info3">
        <div className="content23">
          <b className="title15">{portfolioData.borrowedLoansCount || 0}</b>
          <div className="subtitle18">Loans Borrowed</div>
        </div>
      </div>
      <div className="info4">
        <div className="content23">
          <b className="title15">{portfolioData.completedLoansCount || 0}</b>
          <div className="subtitle18">Loans Completed</div>
        </div>
      </div>
      <div className="stats1">
        <div className="stat3">
          <div className="line-parent1">
            <div className="frame-child3" />
            <div className="total-interest-gained-parent">
              <div className="total-interest-gained">Total Interest Gained</div>
              <b className="b3">
                {numberWithCommaINR(
                  portfolioData.totalInterestGained || 0,
                  true
                )}
              </b>
            </div>
          </div>
          <div className="badge3" />
        </div>
        <div className="stat3">
          <div className="line-parent1">
            <div className="frame-child3" />
            <div className="total-interest-gained-parent">
              <div className="total-interest-gained">{`Total Interest Paid `}</div>
              <b className="b3">
                {numberWithCommaINR(portfolioData.totalInterestPaid || 0, true)}
              </b>
            </div>
          </div>
        </div>
      </div>
      <img className="divider-icon2" alt="" src="/divider2.svg" />
      <div className="energy-summary-parent">
        <div className="energy-summary">
          <div className="graphic">
            <div className="graphic-child" />
            <div className="graphic-item" />
            <img className="graphic-inner" alt="" src="/ellipse-8.svg" />
            <div className="graphic-child1" />
            <b className="title18">Borrower</b>

            <div className="graphic-child2" />
            <div className="graphic-child3" />
          </div>
          <div className="content26">
            <div className="natonal-avg">
              <div className="content22">
                <div className="subtitle21">EMIs paid on time</div>
                <b className="title19">
                  {portfolioData.emiPaidAsBorrower || 0}
                </b>
              </div>
              <div className="badge7">
                <div className="loan-type-text">Good</div>
              </div>
            </div>
            <div className="natonal-avg">
              <div className="content22">
                <div className="subtitle21">Pending EMIs unpaid</div>
                <b className="title19">
                  {portfolioData.emiPendingAsBorrower || 0}
                </b>
              </div>
              <div className="badge9">
                <div className="loan-type-text">Poor</div>
              </div>
            </div>
          </div>
        </div>
        <div className="energy-summary1">
          <div className="graphic">
            <div className="graphic-child" />
            <div className="graphic-item" />
            <img className="graphic-inner" alt="" src="/ellipse-81.svg" />
            <div className="graphic-child1" />
            <b className="title22">Lender</b>

            <div className="graphic-child7" />
            <img className="graphic-child8" alt="" src="/ellipse-12.svg" />
          </div>

          <div className="content26">
            <div className="natonal-avg">
              <div className="content22">
                <div className="subtitle21">EMIs Received on time</div>
                <b className="title19">
                  {portfolioData.emiReceivedAsLender || 0}
                </b>
              </div>
              <div className="badge7">
                <div className="loan-type-text">Good</div>
              </div>
            </div>
            <div className="natonal-avg">
              <div className="content22">
                <div className="subtitle21">Pending EMIs unpaid</div>
                <b className="title19">
                  {portfolioData.emiPendingAsLender || 0}
                </b>
              </div>
              <div className="badge9">
                <div className="loan-type-text">Poor</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="table1">
        <div className="column18">
          <div className="head54">
            <div className="sr-no1">SR. NO.</div>
          </div>
          <div className="head55">
            <div className="wrapper6">
              <div className="div96">1</div>
            </div>
          </div>
          <div className="head55">
            <div className="wrapper6">
              <div className="div96">2</div>
            </div>
          </div>
          <div className="head55">
            <div className="wrapper6">
              <div className="div96">3</div>
            </div>
          </div>
          <div className="head55">
            <div className="wrapper6">
              <div className="div96">4</div>
            </div>
          </div>
          <div className="head55">
            <div className="wrapper6">
              <div className="div96">5</div>
            </div>
          </div>
          <div className="head55">
            <div className="wrapper6">
              <div className="div96">6</div>
            </div>
          </div>
          <div className="head55">
            <div className="wrapper6">
              <div className="div96">7</div>
            </div>
          </div>
          <div className="head55">
            <div className="wrapper6">
              <div className="div96">8</div>
            </div>
          </div>
        </div>
        <div className="column19">
          <div className="head54">
            <div className="nd-party-name">2nd PARTY NAME</div>
          </div>
          <div className="head55">
            <div className="tad-muller">Tad Muller</div>
          </div>
          <div className="head55">
            <div className="tad-muller">Elise Kovacek</div>
          </div>
          <div className="head55">
            <div className="tad-muller">Chelsie Senger</div>
          </div>
          <div className="head55">
            <div className="tad-muller">Braeden Torphy</div>
          </div>
          <div className="head55">
            <div className="tad-muller">Hoyt Beahan</div>
          </div>
          <div className="head55">
            <div className="tad-muller">Betty Zemlak</div>
          </div>
          <div className="head55">
            <div className="tad-muller">Raymond Homenick</div>
          </div>
          <div className="head55">
            <div className="tad-muller">August Ernser</div>
          </div>
        </div>
        <div className="column20">
          <div className="head72">
            <div className="loan-type-text">LOAN TYPE</div>
          </div>
          <div className="head55">
            <div className="green-wrapper">
              <div className="loan-type-text">LEND</div>
            </div>
          </div>
          <div className="head55">
            <div className="green-wrapper">
              <div className="loan-type-text">LEND</div>
            </div>
          </div>
          <div className="head55">
            <div className="green-wrapper">
              <div className="loan-type-text">LEND</div>
            </div>
          </div>
          <div className="head76">
            <div className="red-wrapper">
              <div className="loan-type-text">BORROW</div>
            </div>
          </div>
          <div className="head76">
            <div className="red-wrapper">
              <div className="loan-type-text">BORROW</div>
            </div>
          </div>
          <div className="head55">
            <div className="green-wrapper">
              <div className="loan-type-text">LEND</div>
            </div>
          </div>
          <div className="head76">
            <div className="red-wrapper">
              <div className="loan-type-text">BORROW</div>
            </div>
          </div>
          <div className="head76">
            <div className="red-wrapper">
              <div className="loan-type-text">BORROW</div>
            </div>
          </div>
        </div>
        <div className="column19">
          <div className="head72">
            <div className="loan-type-text">PRINCIPLE</div>
          </div>
          <div className="head55">
            <div className="total-interest-gained">₹ 33,672.00</div>
          </div>
          <div className="head55">
            <div className="total-interest-gained">₹ 33,672.00</div>
          </div>
          <div className="head55">
            <div className="total-interest-gained">₹ 33,672.00</div>
          </div>
          <div className="head55">
            <div className="total-interest-gained">₹ 33,672.00</div>
          </div>
          <div className="head55">
            <div className="total-interest-gained">₹ 33,672.00</div>
          </div>
          <div className="head55">
            <div className="total-interest-gained">₹ 33,672.00</div>
          </div>
          <div className="head55">
            <div className="total-interest-gained">₹ 33,672.00</div>
          </div>
          <div className="head55">
            <div className="total-interest-gained">₹ 33,672.00</div>
          </div>
        </div>
        <div className="column19">
          <div className="head72">
            <div className="loan-type-text">INTEREST RATE</div>
          </div>
          <div className="head55">
            <div className="total-interest-gained">5.66 %</div>
          </div>
          <div className="head55">
            <div className="total-interest-gained">6.70 %</div>
          </div>
          <div className="head55">
            <div className="total-interest-gained">8.32 %</div>
          </div>
          <div className="head55">
            <div className="total-interest-gained">8.55 %</div>
          </div>
          <div className="head55">
            <div className="total-interest-gained">4.45 %</div>
          </div>
          <div className="head55">
            <div className="total-interest-gained">8.50 %</div>
          </div>
          <div className="head55">
            <div className="total-interest-gained">8.50 %</div>
          </div>
          <div className="head55">
            <div className="total-interest-gained">8.50 %</div>
          </div>
        </div>
        <div className="column23">
          <div className="head72">
            <div className="loan-type-text">LOAN STATUS</div>
          </div>
          <div className="head100">
            <div className="green-wrapper">
              <div className="loan-type-text">COMPLETED</div>
            </div>
          </div>
          <div className="head55">
            <div className="in-progress-wrapper">
              <div className="loan-type-text">IN PROGRESS</div>
            </div>
          </div>
          <div className="head55">
            <div className="in-progress-wrapper">
              <div className="loan-type-text">IN PROGRESS</div>
            </div>
          </div>
          <div className="head55">
            <div className="in-progress-wrapper">
              <div className="loan-type-text">IN PROGRESS</div>
            </div>
          </div>
          <div className="head55">
            <div className="in-progress-wrapper">
              <div className="loan-type-text">IN PROGRESS</div>
            </div>
          </div>
          <div className="head55">
            <div className="in-progress-wrapper">
              <div className="loan-type-text">IN PROGRESS</div>
            </div>
          </div>
          <div className="head55">
            <div className="in-progress-wrapper">
              <div className="loan-type-text">IN PROGRESS</div>
            </div>
          </div>
          <div className="head100">
            <div className="green-wrapper">
              <div className="loan-type-text">COMPLETED</div>
            </div>
          </div>
        </div>
        <div className="column19">
          <div className="head72">
            <div className="loan-type-text"> AGREEMENT</div>
          </div>
          <div className="head109">
            <div className="buttons6">
              <img className="icon8" alt="" src="/icon3.svg" />
              <div className="button">Download PDF Report</div>
            </div>
          </div>
          <div className="head109">
            <div className="buttons6">
              <img className="icon8" alt="" src="/icon4.svg" />
              <div className="button">Download PDF Report</div>
            </div>
          </div>
          <div className="head109">
            <div className="buttons6">
              <img className="icon8" alt="" src="/icon5.svg" />
              <div className="button">Download PDF Report</div>
            </div>
          </div>
          <div className="head109">
            <div className="buttons6">
              <img className="icon8" alt="" src="/icon6.svg" />
              <div className="button">Download PDF Report</div>
            </div>
          </div>
          <div className="head109">
            <div className="buttons6">
              <img className="icon8" alt="" src="/icon7.svg" />
              <div className="button">Download PDF Report</div>
            </div>
          </div>
          <div className="head109">
            <div className="buttons6">
              <img className="icon8" alt="" src="/icon8.svg" />
              <div className="button">Download PDF Report</div>
            </div>
          </div>
          <div className="head109">
            <div className="buttons6">
              <img className="icon8" alt="" src="/icon9.svg" />
              <div className="button">Download PDF Report</div>
            </div>
          </div>
          <div className="head109">
            <div className="buttons6">
              <img className="icon8" alt="" src="/icon10.svg" />
              <div className="button">Download PDF Report</div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="table1">
        <Grid
          totalCount={portfolioData.loans}
          rows={prepareLoansGridData(portfolioData.loans)}
          columns={getLoansGridColumns()}
          showPagination={false}
        />
      </div>
      <div className="wallet-details">Wallet Details</div>
      <div className="loan-details1">Loan Details</div>
      <div className="frame-parent">
        <div className="frame-group">
          <div className="parent">
            <b className="b6">
              {numberWithCommaINR(portfolioData.walletBalance || 0, true)}
            </b>
            <div className="keep-your-wallet">
              {" "}
              Keep your wallet balance updated for your upcoming EMIs
            </div>
          </div>
          <div className="buttons-wrapper">
            <div className="buttons14">
              <img className="icon8" alt="" src="/icon11.svg" />
              <div className="loan-type-text">Add Money</div>
            </div>
          </div>
        </div>
        <div className="frame-child6" />
      </div>
    </div>
  );
};

export default PortfolioPage;
