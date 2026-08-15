import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, test, expect, vi, beforeEach, afterEach } from "vitest";
import ChatBox from "./ChatBox";

describe("ChatBox", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  test("renders the StudyMate AI greeting and input", () => {
    render(<ChatBox />);

    expect(
      screen.getByText("👋 Hello! How can I help you study today?")
    ).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText("Ask anything...")
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: "Send" })
    ).toBeInTheDocument();
  });

  test("sends a message and displays the AI response", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      json: vi.fn().mockResolvedValue({
        reply: "Here is your study explanation.",
      }),
    });

    vi.stubGlobal("fetch", fetchMock);

    render(<ChatBox />);

    const input = screen.getByPlaceholderText("Ask anything...");

    fireEvent.change(input, {
      target: { value: "Explain operating systems" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Send" }));

    expect(
      screen.getByText("Explain operating systems")
    ).toBeInTheDocument();

    await waitFor(() => {
      expect(
        screen.getByText("Here is your study explanation.")
      ).toBeInTheDocument();
    });

    expect(fetchMock).toHaveBeenCalledWith(
      "/api/chat",
      expect.objectContaining({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: "Explain operating systems",
        }),
      })
    );
  });

  test("handles API connection failure", async () => {
    const fetchMock = vi
      .fn()
      .mockRejectedValue(new Error("Network error"));

    vi.stubGlobal("fetch", fetchMock);

    render(<ChatBox />);

    const input = screen.getByPlaceholderText("Ask anything...");

    fireEvent.change(input, {
      target: { value: "Explain databases" },
    });

    fireEvent.click(screen.getByRole("button", { name: "Send" }));

    await waitFor(() => {
      expect(
        screen.getByText("❌ Failed to connect to Gemini.")
      ).toBeInTheDocument();
    });
  });

  test("does not send an empty message", () => {
    const fetchMock = vi.fn();

    vi.stubGlobal("fetch", fetchMock);

    render(<ChatBox />);

    const input = screen.getByPlaceholderText("Ask anything...");

    fireEvent.change(input, {
      target: { value: "   " },
    });

    fireEvent.click(screen.getByRole("button", { name: "Send" }));

    expect(fetchMock).not.toHaveBeenCalled();

    expect(
      screen.queryByText("You")
    ).not.toBeInTheDocument();
  });

  test("sends the message when Enter is pressed", async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      json: vi.fn().mockResolvedValue({
        reply: "Enter key response",
      }),
    });

    vi.stubGlobal("fetch", fetchMock);

    render(<ChatBox />);

    const input = screen.getByPlaceholderText("Ask anything...");

    fireEvent.change(input, {
      target: { value: "What is normalization?" },
    });

    fireEvent.keyDown(input, {
      key: "Enter",
      code: "Enter",
    });

    await waitFor(() => {
      expect(
        screen.getByText("Enter key response")
      ).toBeInTheDocument();
    });

    expect(fetchMock).toHaveBeenCalled();
  });
});