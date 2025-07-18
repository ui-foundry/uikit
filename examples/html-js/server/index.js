const express = require("express");
const path = require("node:path");

const app = express();

app.use(({ method, url }, _res, next) => {
	console.log(`[ ${method} ] ${url}`);
	next();
});

app.use("/", express.static(path.join(__dirname, "../public")));

app.use(
	"/ui-library",
	express.static(
		path.join(__dirname, "../node_modules/@ui-foundry/uikit/dist/core"),
	),
);

app.get("*", (_req, res) => {
	res.sendFile(path.join(__dirname, "../public/index.html"));
});

const server = app.listen(1234, () => {
	console.log(`Server running on port ${server.address().port}`);
});
