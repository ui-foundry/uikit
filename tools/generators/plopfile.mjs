/** @type {import('plop').NodePlopAPI} */
export default function (plop) {
	const docPath = "../../docs/src/components";
	const componentPath = "../../packages/core/src/components/{{kebabCase name}}";

	plop.setGenerator("component", {
		description: "Generate uikit ui components",
		prompts: [
			{ type: "input", name: "name", message: "Component name (we will prepend ui-) " },
			{ type: "confirm", name: "styling", message: "Styling " },
			{ type: "confirm", name: "stylingVariables", message: "Style variables ", when: ({ styling }) => styling },
		],
		actions: [
			{
				type: "add",
				path: `${docPath}/{{kebabCase name}}.md`,
				templateFile: "./component/readme-doc.hbs",
				skipIfExists: true,
			},
			{
				type: "add",
				path: `${componentPath}/ui-{{kebabCase name}}.tsx`,
				templateFile: "./component/component.hbs",
				skipIfExists: true,
			},
			{
				type: "add",
				path: `${componentPath}/scss/ui-{{kebabCase name}}.scss`,
				templateFile: "./component/scss.hbs",
				skipIfExists: true,
				skip: ({ styling }) => {
					if (!styling) {
						return "Styling skipped";
					}
				},
			},
			{
				type: "add",
				path: `${componentPath}/scss/ui-{{kebabCase name}}.variables.scss`,
				templateFile: "./component/scss-variables.hbs",
				skipIfExists: true,
				skip: ({ stylingVariables }) => {
					if (!stylingVariables) {
						return "Style variables skipped";
					}
				},
			},
		],
	});
}
