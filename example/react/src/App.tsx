import "@uifoundry/uikit/dist/uikit/uikit.css";

import { UiAvatar } from "@uifoundry/uikit-react";

const App = () => {
	return (
		<div className="content" data-color-scheme="light">
			<h1>Rsbuild with React</h1>
			<p>Start building amazing things with Rsbuild.</p>

			<UiAvatar initials="RA" alt="React Avatar" radius="md" />
		</div>
	);
};

export default App;
