/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.hbs", "./**/*.hbs"],
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: "1.5rem",
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
