import { render, screen } from "@testing-library/react";
import SignupPage from "../signup/signup";
import { BrowserRouter } from "react-router-dom";

test("render sign-up page", () => {
  render(
    <BrowserRouter>
      <SignupPage />
    </BrowserRouter>
  );

  const signupTitle = screen.getByTestId("signup-title");
  expect(signupTitle).toBeTruthy();
});
