import { render, screen } from "@testing-library/react";

import Home from "./page";

jest.mock("next/navigation", () => ({
	useRouter: () => ({
		push: jest.fn(),
	}),
}));

global.fetch = jest.fn(() =>
	Promise.resolve({
		status: 200,
	})
) as jest.Mock;

describe("testing the home page", () => {
	it("should render all the elements of home page", () => {
		render(<Home />);

		expect(screen.getByText("PEDALANDO")).toBeInTheDocument();
		expect(screen.getByTestId("app-header")).toBeInTheDocument();

		expect(
			screen.getByText("Pedale com liberdade no campus")
		).toBeInTheDocument();
		expect(
			screen.getByText(
				"Uma plataforma entre estudantes da Unicamp para facilitar o empréstimo temporário de bicicletas com segurança, praticidade e confiança."
			)
		).toBeInTheDocument();

		expect(
			screen.getByRole("button", { name: "Cadastre-se" })
		).toBeInTheDocument();
	});
});
