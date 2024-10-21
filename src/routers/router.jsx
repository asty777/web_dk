import { createBrowserRouter } from "react-router-dom";
import {CommonPage, PrivatePage} from "../pages";

const router = createBrowserRouter([
    {
      path: "/",
      element: CommonPage.LoginPage,
    },
    {
      path: "/Dashboard",
      element: PrivatePage.DashboardPage,
    },
    {
      path: "/Menu",
      element: PrivatePage.MenuPage,
    },
    {
      path: "/Order",
      element: PrivatePage.OrderPage,
    },
    {
      path: "/DetailOrder",
      element: PrivatePage.DetailOrderPage,
    },
    {
      path: "/BuktiPembayaran",
      element: PrivatePage.PembayaranPage,
    },
    {
      path: "/Chat",
      element: PrivatePage.ChatPage,
    },

])   
export default router;