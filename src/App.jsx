import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import VideoPage from "./pages/VideoPage";
import Errorpage from "./pages/ErrorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomePage />} />
      <Route path="/video/:id" element={<VideoPage />} />
      <Route path="*" element={<Errorpage />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
