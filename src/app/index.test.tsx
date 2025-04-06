test("to see if jest + react testing library are working", () => {
	expect(typeof window).toBe("object");
  expect(document.body).toBeInTheDocument();
});
