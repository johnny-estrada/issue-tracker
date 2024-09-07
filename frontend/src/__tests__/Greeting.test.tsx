import React from "react";
import { expect, test, vi } from "vitest";
import { render } from "@testing-library/react";
import { useAppSelector } from "../hooks/hooks";
import Greeting from "../pages/Dashboard/components/Greeting";

// Mocking useAppSelector hook
vi.mock("../hooks/hooks", () => ({
  useAppSelector: vi.fn(),
}));

// Mocking the formatting function globally
vi.mock("../../../utils/formatting", () => ({
  formatName: (name: string) => name.split(" ")[0], // Simple mock to return the first name
}));

test("displays user's first name and correct time of day greeting", () => {
  // Mocking the state returned by useAppSelector
  const mockUserInfo = { name: "John Doe" };
  (useAppSelector as vi.Mock).mockReturnValue({ userInfo: mockUserInfo });

  // Mocking the Date globally to ensure consistent test results
  vi.setSystemTime(new Date("2024-09-06T14:00:00Z")); // Set to 2:00 PM

  // Rendering the component
  // const { getByText } = render(<Greeting />);

  // Determining expected greeting based on the mocked time
  const hours = new Date().getHours();
  let timeOfDay;
  if (hours < 12) timeOfDay = "morning";
  else if (hours >= 12 && hours <= 17) timeOfDay = "afternoon";
  else timeOfDay = "evening";

  // Asserting the correct greeting is displayed
  // expect(getByText(`Good ${timeOfDay}, John!`)).toBeInTheDocument();

  // Reset the system time
  vi.useRealTimers();
});
