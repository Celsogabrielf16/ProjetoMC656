import { render, screen } from "@testing-library/react";

import Login from "./page";

describe("testing the login page", () => {
	it("should render all the elements of login page", () => {
		render(<Login />);

		expect(screen.getByText("PEDALANDO")).toBeInTheDocument();
		expect(screen.getByTestId("app-header")).toBeInTheDocument();

		const emailInput = screen.getByPlaceholderText("E-mail");
		expect(emailInput).toBeInTheDocument();

		const passwordInput = screen.getByPlaceholderText("Senha");
		expect(passwordInput).toBeInTheDocument();

		expect(screen.getByRole("button", { name: "Entrar" })).toBeInTheDocument();
	});
});
