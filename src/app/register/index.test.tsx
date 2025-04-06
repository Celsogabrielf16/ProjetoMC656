import { render, screen } from "@testing-library/react";

import Register from "./page";

describe("testing the register page", () => {
	it("should render all the elements of register page", () => {
		render(<Register />);

		expect(screen.getByText("PEDALANDO")).toBeInTheDocument();
		expect(screen.getByTestId("app-header")).toBeInTheDocument();

		const nameInput = screen.getByPlaceholderText("Nome");
		expect(nameInput).toBeInTheDocument();

    const emailInput = screen.getByPlaceholderText("E-mail");
		expect(emailInput).toBeInTheDocument();

		const passwordInput = screen.getByPlaceholderText("Senha");
		expect(passwordInput).toBeInTheDocument();

		expect(screen.getByRole("button", { name: "Cadastrar-se" })).toBeInTheDocument();
	});
});
