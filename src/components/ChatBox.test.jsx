import { render, screen } from "@testing-library/react";
import ChatBox from "./ChatBox";

describe("ChatBox", () => {
  test("renders the StudyMate AI greeting and input", () => {
    render(<ChatBox />);

    expect(
      screen.getByText("👋 Hello! How can I help you study today?")
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("Ask anything...")
    ).toBeInTheDocument();

    expect(screen.getByRole("button", { name: "Send" })).toBeInTheDocument();
  });
});