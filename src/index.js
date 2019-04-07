import React, {Suspense} from "react";
import ReactDOM from 'react-dom';

import App from './App';
import './lib/i18next';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const Loader = () => <div>loading...</div>;

ReactDOM.render(
  <Suspense fallback={<Loader />}>
    <App />
  </Suspense>,
  document.getElementById("root")
);

serviceWorker.unregister();
