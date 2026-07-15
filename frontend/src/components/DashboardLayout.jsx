import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";

function DashboardLayout({ children }) {

    return (

        <div className="d-flex">

            <Sidebar />

            <div
                className="flex-grow-1 bg-light"
                style={{
                    minHeight: "100vh",
                }}
            >

                <TopNavbar />

                <div className="container-fluid p-4">

                    {children}

                </div>

            </div>

        </div>

    );

}

export default DashboardLayout;