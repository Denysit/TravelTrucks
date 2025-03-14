import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Nav/Navigation";
import "./App.css";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const PageNotFound = lazy(() => import("./pages/PageNotFound/PageNotFound"));
const Catalog = lazy(() => import("./pages/Catalog/Catalog"));
const DetailInfoCampers = lazy(() =>
  import("./pages/DetailInfoCampers/DetailInfoCampers")
);

function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<div>Loading....</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<DetailInfoCampers />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
