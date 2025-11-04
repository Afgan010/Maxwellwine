import { Route, Routes } from "react-router-dom";
import pageList from "../constants/PageList";

const MyShopRoutes = () => {
  return (
    <Routes>
      {pageList
        .filter((item) => item.is_visiable)
        .map((item) => (
          <Route path={item.path} element={item.element} />
        ))}
    </Routes>
  );
};

export default MyShopRoutes;
