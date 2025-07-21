import '@uifoundry/uikit/dist/uikit/uikit.css';

import { UkAlert } from '@uifoundry/uikit-react';
import React from 'react';
import ReactDOM from 'react-dom/client';

const rootEl = document.getElementById('root');
if (rootEl) {
    const root = ReactDOM.createRoot(rootEl);
    root.render(
        <React.StrictMode>
            <div className="uk-d-flex uk-flex-col">
                <h1>Rsbuild with React</h1>
                <p>Start building amazing things with Rsbuild.</p>
                <UkAlert heading="Welcome to Rsbuild!" type="info">
                    <p>
                        This is a simple alert component from the UI Foundry Kit. You can use it to display important
                        messages to users.
                    </p>
                </UkAlert>
            </div>
        </React.StrictMode>
    );
}
