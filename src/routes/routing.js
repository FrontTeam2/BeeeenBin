import Layout from "component/Layout";
import IndexPage from "pages";
import BoardList from "pages/Board/board";
import DetailPage from "pages/Board/detail/detail";
import HashFilter from "pages/Filter/filter";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <IndexPage />,
                children: [
                    { path: "/", element: <HashFilter /> },
                    {
                        path: "/",
                        element: <BoardList />,
                    },
                ],
            },

            {
                path: "/detail/:id",
                element: <DetailPage />,
            },
        ],
    },
]);

export default router;
