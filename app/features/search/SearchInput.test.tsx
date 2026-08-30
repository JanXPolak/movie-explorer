import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchInput from "./SearchInput";

test("renders search input", () => {
  render(<SearchInput searchQuery="" setSearchQuery={() => {}} />);
  const input = screen.getByRole("textbox");
  expect(input).toBeInTheDocument();
});

test("calls onChange with when user types", async () => {
  const user = userEvent.setup();
  const onChange = jest.fn();
  render(<SearchInput searchQuery="" setSearchQuery={onChange} />);
  const input = screen.getByRole("textbox");
  await user.click(input);
  await user.keyboard("Some Title");

  expect(onChange).toHaveBeenCalled();
});
