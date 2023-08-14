
import SideBar from "../Components/sideBar";
import Content from "../Components/content";
import HeaderAdminPage from "../Components/header";

const AdminPage = () => {
    return (
        <div className="grid grid-rows-3 grid-flow-col mx-auto relative h-[100vh]">
            <div className="w-[15%] flex justify-center row-span-3 h-[100vh] fixed bg-blue-950 ">
                <SideBar></SideBar>
            </div>

            <div className="w-[85%] bg-blue-950 flex justify-start col-span-2 h-[5vh] fixed right-0 ">
                <HeaderAdminPage></HeaderAdminPage>
            </div>

            <div className="w-[85%] bg-blue-300 flex justify-center row-span-2 col-span-2 h-[95vh] absolute right-0 top-[5vh] overflow-y-auto">
                <Content></Content>
            </div>
        </div>
    )
}

export default AdminPage
