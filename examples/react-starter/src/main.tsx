import { UkAlert } from "@uifoundry/uikit/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@uifoundry/uikit-react/styles.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<UkAlert heading="Alert Heading">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsam
			nesciunt voluptates iusto nemo, eos doloribus aliquid praesentium
			dolorem! Laboriosam natus cupiditate fuga iusto maxime quis
			excepturi, deleniti quo similique!
		</UkAlert>
	</StrictMode>,
);
