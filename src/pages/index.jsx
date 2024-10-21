import DashboardPage from "./Dashboard";
import LoginPage from "./LoginPage";
import MenuPage from "./Menu";
import OrderPage from "./Pesanan";
import DetailOrderPage from "./DetailPesanan";
import PembayaranPage from "./BuktiPembayaran";
import Chat from "./ChatPage";
export const CommonPage = {
    LoginPage: <LoginPage/>,

};

export const PrivatePage = {
    DashboardPage : <DashboardPage/>,
    MenuPage : <MenuPage/>,
    OrderPage : <OrderPage/>,
    DetailOrderPage : <DetailOrderPage/>,
    PembayaranPage : <PembayaranPage/>,
    ChatPage : <Chat/>,


};