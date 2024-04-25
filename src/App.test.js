import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { ToastContainer } from "react-toastify";

test("Check App renders successfully!", () => {
  render(
    <BrowserRouter>
      <App />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
      />
    </BrowserRouter>
  );
});
