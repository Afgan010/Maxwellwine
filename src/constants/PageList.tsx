import type { ReactElement } from "react";
import NotFound from "../Additionals/View/NotFound";
import Contact from "../Modules/Contact/View/Contact";
import Events from "../Modules/Events/View/Events";
import Home from "../Modules/Home/View/Home";
import Shop from "../Modules/Shop/View/Shop";
import ShopDetail from "../Modules/Shop/View/ShopDetail";
import About from "../Modules/About/View/About";

export interface PageItem {
  id: string;
  title: string;
  path: string;
  element: ReactElement;
  is_visiable: boolean;
  for_header: boolean;
}

const pageList: PageItem[] = [
  {
    id: "home",
    title: "Home",
    path: "/",
    element: <Home />,
    is_visiable: true,
    for_header: true,
  },
  {
    id: "shop",
    title: "Shop",
    path: "/shop",
    element: <Shop />,
    is_visiable: true,
    for_header: true,
  },
  {
    id: "shopDetail",
    title: "shopDetail",
    path: "/shop-detail/:id",
    element: <ShopDetail />,
    is_visiable: true,
    for_header: false,
  },
  {
    id: "events",
    title: "Events",
    path: "/events",
    element: <Events />,
    is_visiable: true,
    for_header: true,
  },
  {
    id: "contact",
    title: "Contact",
    path: "/contact",
    element: <Contact />,
    is_visiable: true,
    for_header: true,
  },
  {
    id: "notFound",
    title: "NotFound",
    path: "*",
    element: <NotFound />,
    is_visiable: true,
    for_header: false,
  },
  {
    id: "about",
    title: "About",
    path: "/about",
    element: <About />,
    is_visiable: true,
    for_header: true,
  },
];

export default pageList;
