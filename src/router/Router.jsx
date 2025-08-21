import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import TarotHome from "../pages/TarotHome";
import CardDetail from "../pages/CardDetail";
import EchaTusCartas from "../pages/EchaTusCartas"; // 👈 importar la página

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <TarotHome />,
      },
      {
        path: "card/:id?", // El :id es opcional con ?
        element: <CardDetail />,
      },
      {
        path: "echa-tus-cartas", // 👈 nueva ruta
        element: <EchaTusCartas />,
      },
    ],
  },
]);
