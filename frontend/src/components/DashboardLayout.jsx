import Sidebar from "./Sidebar";
import TopNavbar from "./TopNavbar";

function DashboardLayout({ children }) {

    return (

        <div className="d-flex">

            <Sidebar />

            <div
                className="flex-grow-1"
                style={{
                    minHeight: "100vh",
                }}
            >

                <TopNavbar />

                <div className="container-fluid dashboard-main p-4">

                    {children}

                </div>

            </div>

        </div>

    );

}

export default DashboardLayout;