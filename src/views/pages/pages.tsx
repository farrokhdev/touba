import { Route, Routes, useLocation } from "react-router-dom";
import { CompanyProfileEdit, CompanyProfileExcess, CompanyProfileProduct, CompanyProfileStart, Dashboard, DetailsOrder, EditOrder, Finance, LikeCard, Report, Review, TableOrder, WorkGroup } from "./dashboard";
import { About, Card, CompanyProfile, ExcessCapacity, Help, Home, Login, Membership, Product, ProductSingle, Register, ResultExcessCapacity, ResultProduct, ResultSupplier, SideService, SpecialOffer, Supplier } from "./desktop";
import { default as DashboarNav } from "../layout/dashboard/dashobord";
import { TopNavHome, TopNav, BottomNav, Footer } from "../layout/layout";

function Pages() {
  const location = useLocation();

  return (
    <div>
      <>
        {
          location.pathname.includes("/dashboard") ||
            location.pathname === "/login" ||
            location.pathname === "/register" ? (null) : (
            <>
              {location.pathname === "/" ? <TopNavHome /> : <TopNav />}
              <BottomNav />
            </>
          )}
        {location.pathname.includes("/dashboard") ? (
          <div className="row p-0 m-0">
            <div className="col-2">
              <DashboarNav />
            </div>
            <div className="col-10">
              <Routes>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="dashboard/profile-edit" element={<CompanyProfileEdit />} />
                <Route path="dashboard/profile-start" element={<CompanyProfileStart />} />
                <Route path="dashboard/profile-excess" element={<CompanyProfileExcess />} />
                <Route path="dashboard/profile-product" element={<CompanyProfileProduct />} />
                <Route path="dashboard/finance" element={<Finance />} />
                <Route path="dashboard/like-card" element={<LikeCard />} />
                <Route path="dashboard/details-order" element={<DetailsOrder />} />
                <Route path="dashboard/edit-order" element={<EditOrder />} />
                <Route path="dashboard/report" element={<Report />} />
                <Route path="dashboard/review" element={<Review />} />
                <Route path="dashboard/table-order" element={<TableOrder />} />
                <Route path="dashboard/table-order" element={<TableOrder />} />
                <Route path="dashboard/work-group" element={<WorkGroup />} />
              </Routes>
            </div>
          </div>
        ) : (null)}
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="card" element={<Card />} />
          <Route path="company-profile" element={<CompanyProfile />} />
          <Route path="excess-capacity" element={<ExcessCapacity />} />
          <Route path="help" element={<Help />} />
          <Route path="login" element={<Login />} />
          <Route path="membership" element={<Membership />} />
          <Route path="product" element={<Product />} />
          <Route path="product-single" element={<ProductSingle />} />
          <Route path="register" element={<Register />} />
          <Route path="result-excess-capacity" element={<ResultExcessCapacity />} />
          <Route path="result-product" element={<ResultProduct />} />
          <Route path="result-supplier" element={<ResultSupplier />} />
          <Route path="side-service" element={<SideService />} />
          <Route path="special-offer" element={<SpecialOffer />} />
          <Route path="supplier" element={<Supplier />} />
        </Routes>
        {
          location.pathname.includes("/dashboard") ||
            location.pathname === "/login" ||
            location.pathname === "/register"
            ? (null) : (
              <Footer />
            )
        }
      </>
    </div>
    // <div>
    //   {/* <div className="mt-3 p-3 bg-white">
    //     <ComponentFieldsetPrice/> 
    //   </div> */}

    //   {location.pathname.includes("login") ||
    //     location.pathname.includes("register") ||
    //     location.pathname.includes("dashboard") ||
    //     location.pathname.includes("dashboard-table-order") ||
    //     location.pathname.includes("/dashboard-like-card") ||
    //     location.pathname.includes("/dashboard/edit-order") ||
    //     location.pathname.includes("/dashboard/details-order") ? null : (
    //     <>
    //       {location.pathname === "/" ? <TopNavHome /> : <TopNav />}
    //       <BottomNav />
    //     </>
    //   )}
    //   {location.pathname.includes("/profile") ? <ComponentBinaRazan /> : null}
    //   {location.pathname.includes("/dashboard") ? (
    //     <div className="row p-0 m-0">
    //       <div className="col-2 ">
    //         <Dashboard />
    //       </div>
    //       <div className="col-10">
    //         <Routes>
    //           <Route path="/dashboard" element={<DashboardPage />} />
    //           <Route path="/dashboard/edit-order" element={<EditOrder />} />
    //           <Route
    //             path="/dashboard/details-order"
    //             element={<DetailsOrder />}
    //           />
    //           <Route path="/dashboard/finance" element={<DashboardFinance />} />{" "}
    //           <Route
    //             path="/dashboard/companyprofile/excess"
    //             element={<DashboardCompanyPofileExcess />}
    //           />
    //           <Route path="/dashboard-finance" element={<DashboardFinance />} />
    //           <Route
    //             path="/dashboard-table-order"
    //             element={<DashboardTableOrder />}
    //           />
    //           <Route path="/dashboard-review" element={<Review />} />
    //           <Route
    //             path="/dashboard-like-card"
    //             element={<DashboardLikeCard />}
    //           />
    //           <Route
    //             path="/dashboard-company-profile"
    //             element={<DashboardCompanyProfile />}
    //           />
    //           <Route
    //             path="/dashboard-company-edit"
    //             element={<CompanyProfileEdit />}
    //           />
    //           <Route
    //             path="/dashboard-company-start"
    //             element={<CompanyProfileStart />}
    //           />
    //           <Route path="/dashboard-report" element={<Report />} />
    //         </Routes>
    //       </div>
    //     </div>
    //   ) : null}
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about-us" element={<AboutusPage />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/register" element={<Register />} />
    //     <Route path="/product" element={<ToubaProduct />} />
    //     <Route path="/detail-product" element={<ToubaProductSingle1 />} />
    //     <Route path="/supplier" element={<ToubaSupplier />} />
    //     <Route path="/special-offers" element={<ToubaSpecialOffers />} />
    //     <Route path="/help" element={<HelpPage />} />
    //     <Route path="/excess" element={<ToubaExcessCapacity />} />
    //     <Route path="/special-offer" element={<ToubaSpecialOffers />} />
    //     <Route path="/membership" element={<MembershipPage />} />
    //     <Route path="/side-service" element={<SideServicePage />} />
    //     <Route path="/company-profile" element={<CompanyProfile />} />
    //     <Route path="/cart" element={<CartPage />} />

    //     <Route path="/test" element={<PageTestComponent />} />
    //   </Routes>
    //   {location.pathname.includes("/login") ||
    //     location.pathname.includes("/register") ||
    //     location.pathname.includes("/dashboard") ||
    //     location.pathname.includes("/dashboard-table-order") ||
    //     location.pathname.includes("/dashboard-like-card") ||
    //     location.pathname.includes("/dashboard/edit-order") ||
    //     location.pathname.includes("/dashboard/details-order") ? null : (
    //     <>
    //       <Footer />
    //     </>
    //   )}
    // </div>
  );
}

export default Pages;
