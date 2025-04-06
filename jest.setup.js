import '@testing-library/jest-dom';
import { useRouter } from "next/navigation";

jest.mock("next/navigation", () => ({
	useRouter: jest.fn(),
}));

beforeEach(() => {
  (useRouter).mockReturnValue({
    push: jest.fn(),
  });
});