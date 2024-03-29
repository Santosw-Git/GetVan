import React from "react";
import { useParams, NavLink, Outlet, Link } from "react-router-dom";
const HostVansDetails = () => {
  const [currentVan, setCurrentVans] = React.useState(null);
  const { id } = useParams();
  React.useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVans(data.vans));
  }, []);

  const activeStyles = {
    color: "slate",
    fontWeight: "bold",
    fontSize: "18px",
    boxShadow: "1px 1px 1px rgba(0, 0, 0, 0)",
    borderRadius: "5px",
  };

  if (!currentVan) {
    return <h1>Loading...</h1>;
  }

  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>
      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={currentVan.imageUrl} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${currentVan.type}`}>
              {currentVan.type}
            </i>
            <h3>{currentVan.name}</h3>
            <h4>${currentVan.price}/day</h4>
          </div>
        </div>

        <nav className="host-van-detail-nav">
          <NavLink
            to="."
            end
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Details
          </NavLink>

          <NavLink
            to="pricing"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Pricing
          </NavLink>

          <NavLink
            to="photos"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Photos
          </NavLink>
        </nav>
        <Outlet context={currentVan} />
      </div>
    </section>
  );
};

export default HostVansDetails;
