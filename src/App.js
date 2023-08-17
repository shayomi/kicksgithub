import Homepage from "./pages/Homepage";
import ProductStore from "./pages/ProductStore";
import RootLayout from "./pages/Root";
import BlogDetail from "./pages/BlogDetail";
import SingleProduct from "./SingleProduct/SingleProductPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./components/cart/Cart";
import BlogPage from "./pages/BlogPage";
import TopPostDetails from "./pages/TopPostDetails";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

// import BlogRecentPage from "./pages/BlogRecentPage";
// import BlogMainPage from "./pages/BlogMainPage";
// import MenProductItem from "./components/productitem/MenProductItem";
// import ProductRootLayout from "./pages/ProductRoot";
// import BlogDetail from "./pages/BlogDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Homepage /> },
      {
        path: "store",
        element: <ProductStore />,
      },
      {
        path: "store/:itemId",
        element: <SingleProduct />,
      },

      {
        path: "blog",
        element: <BlogPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "blog/:blogId",
        element: <BlogDetail />,
      },

      //   {
      //     path: "blog/:recentblogId",
      //     element: <BlogRecentPage />,
      //   },
      //   {
      //     path: "blog/:mainblogId",
      //     element: <BlogMainPage />,
      //   },
    ],
  },
]);

// const router = createBrowserRouter(routeDefinitions)

function App() {
  return <RouterProvider router={router} />;
}

export default App;
