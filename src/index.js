import { render } from "react-dom";
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import RandomQuote from "./routes/RandomQuote";
import Home from "./routes/Home";
import About from "./routes/About";
import MarkdownPreviewer from "./routes/MarkdownPreviewer";

const rootElement = document.getElementById("root");
render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index path="01-random-quote-machine" element={<RandomQuote />} />
        <Route path="02-markdown-previewer" element={<MarkdownPreviewer />} />
        <Route path="about" element={<About />} />
        <Route path="home" element={<Home />} />
        <Route // for all other url slugs
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />  
      </Route>
    </Routes>
  </HashRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
