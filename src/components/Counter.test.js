import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";

test("Counter Render Test", () => {
  render(<Counter id="123" />);
});

test("Counter Increment Test", () => {
  render(<Counter id="1234" />);

  const arttirBtn = screen.getByTestId("arttir-btn");
  fireEvent.click(arttirBtn);
  fireEvent.click(arttirBtn);
  fireEvent.click(arttirBtn);

  const sayacDeger = screen.getByTestId("sayac-deger");

  expect(sayacDeger).toHaveTextContent("3");
});

test("Counter Decrement Test", () => {
  render(<Counter id="12345" />);

  const azaltBtn = screen.getByTestId("azalt-btn");
  const arttirBtn = screen.getByTestId("arttir-btn");

  fireEvent.click(arttirBtn);
  fireEvent.click(arttirBtn);
  fireEvent.click(arttirBtn);
  fireEvent.click(azaltBtn);

  const sayacDeger = screen.getByTestId("sayac-deger");

  expect(sayacDeger).toHaveTextContent("2");
});
