import PropTypes from "prop-types";
const Card = ({ handleClick, data }) => {
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-center align-items-center vh-100">
          <div className="col-6">
            <div className="card">
              <div className="card-header">
                <h3 className="text-center">Joyinggizni aniqlanng</h3>
              </div>
              <div className="card-body">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="#000fff"
                  className="bi bi-geo-alt-fill w-100"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
                <h3 className="text-center fw-bold mt-3">
                  {data?.address.city}{"  "}{data?.address.country}
                </h3>
              </div>
              <div className="card-footer text-center">
                <button
                  className="btn btn-primary"
                  onClick={() => handleClick()}
                >
                  Click
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  handleClick: PropTypes.func,
  data: PropTypes.object,
};

export default Card;
