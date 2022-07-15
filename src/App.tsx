/// <reference types="vite-plugin-svgr/client" />

import { Providers } from "Providers";
import { Home } from "pages/Home";

const App = () => (
  <Providers>
    <Home />
  </Providers>
);

export default App;
