import { useEffect, useState } from "react";
import Header from "../components/header";
import Grid from "../meterial-ui-components/grid/grid";
import "./loan-detail-page.css";
import { urlRoutes } from "../constants";
import { numberWithCommaINR } from "../utils/number-utils";
import { formatDate, months2years } from "../utils/date-utils";
import { getFullName } from "../utils/string-utils";
import { read } from "../utils/axios-utils";
import { useNavigate, useParams } from "react-router-dom";
const LoanDetailPage = () => {
  const navigate = useNavigate();
  const [loan, setLoan] = useState(null);
  const { id } = useParams();

  const onClickBackIcon = () => {
    navigate(urlRoutes.loggedInLandingLoansList);
  };

  useEffect(() => {
    (async () => {
      const resp = await read(`loan/${id}`);
      console.log(resp);
      if (resp.status === "SUCCESS") {
        setLoan(resp.data.loan);
      }
    })();
  }, [id]);

  const getEmiGridColumns = () => [
    { id: "srNo", label: "SR. NO.", minWidth: 80 },
    { id: "dueDate", label: "DUE DATE", minWidth: 170 },
    { id: "emi", label: "EMI", minWidth: 170 },
    { id: "interest", label: "INTEREST", minWidth: 170 },
    { id: "principal", label: "PRINCIPAL", minWidth: 170 },
  ];

  const prepareEmiGridData = (rps) => {
    return rps.map((emiData) => {
      return {
        srNo: emiData.installment,
        dueDate: formatDate(emiData.dueDate),
        emi: numberWithCommaINR(emiData.amount || 0, true),
        interest: numberWithCommaINR(emiData.interest || 0, true),
        principal: numberWithCommaINR(emiData.principal || 0, true),
      };
    });
  };

  return (
    <div className="loandetailpage">
      <Header isUserLoggedIn={true} />
      <div className="settings2">
        <div className="top5">
          <div className="icon-frame" onClick={onClickBackIcon}>
            <img className="icon3" alt="" src="/icon1.svg" />
          </div>
          <div className="loan-details">Loan Details</div>
        </div>
      </div>
      {loan ? (
        <div>
          <div className="borrower-details">Borrower Details</div>

          <div className="checkout2">
            <div className="list2">
              <div className="row12">
                <div className="principle-amount">Principal Amount</div>
                <div className="years">{numberWithCommaINR(loan.amount)}</div>
              </div>
              <div className="row12">
                <div className="principle-amount">Interest Rate</div>
                <div className="years">{`${loan.interestRate}%`}</div>
              </div>
              <div className="row12">
                <div className="principle-amount">Repayment Frequency</div>
                <div className="years">{loan.payoutFrequency}</div>
              </div>
              <div className="row12">
                <div className="principle-amount">Purpose</div>
                <div className="years">{loan.purpose || "---"}</div>
              </div>
              <div className="row12">
                <div className="principle-amount">Tenure</div>
                <div className="years">{months2years(loan.tenureMonths)}</div>
              </div>
              <div className="divider" />
              <div className="row17">
                <div className="maturity-amount">Maturity Amount</div>
                <div className="div9">
                  {numberWithCommaINR(loan.amount + (loan.interest || 0), true)}
                </div>
              </div>
            </div>
            <div className="cta4">
              <div className="emi">INVEST NOW</div>
            </div>
          </div>
          <div className="loan-repayment-schedule">Loan Repayment Schedule</div>
          <div className="table">
            <Grid
              totalCount={loan.rps.length}
              rows={prepareEmiGridData(loan.rps)}
              columns={getEmiGridColumns()}
              showPagination={false}
            />
          </div>
          <div className="card">
            <div className="content-frame">
              <b className="principle-amount">Loan Description</b>
            </div>
            <div className="paragraph">
              <div className="tel">{loan.description || "---"}</div>
            </div>
          </div>
          <div className="left-wrapper">
            <div className="user">
              <div className="container">
                <div className="content3">
                  <div className="content-frame">
                    <div className="maturity-amount">
                      {getFullName(
                        loan.borrower.firstName,
                        loan.borrower.lastName
                      )}
                    </div>
                  </div>
                  <div className="subtitle">Name</div>
                </div>
              </div>
            </div>
            <div className="info">
              <div className="content4">
                <b className="title4">11</b>
                <div className="subtitle1">Loans lent</div>
              </div>
            </div>
            <div className="info1">
              <div className="content4">
                <b className="title4">5</b>
                <div className="subtitle2">Loans borrowed</div>
              </div>
            </div>
            <div className="left">
              <div className="introduction" />
              <div className="contact">
                <div className="lighttel">
                  <img className="icons9" alt="" src="/icons2.svg" />
                  <div className="text6">
                    <div className="tel">Tel</div>
                    <div className="unrealoutlookcom">
                      {loan.borrower.mobile}
                    </div>
                  </div>
                </div>
                <div className="lighttel">
                  <img className="icons9" alt="" src="/icons3.svg" />
                  <div className="text6">
                    <div className="tel">Mail</div>
                    <div className="unrealoutlookcom">
                      {loan.borrower.email}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default LoanDetailPage;
