import { getInitial, getProfilePhotoColor } from "../../shared/constants";
import "./home.css";

const data = [
  {
    _id: {
      $oid: "615084b7cfae4ed0f0e2c088",
    },
    email: "user1@email.com",
    fist_name: "fname",
    last_name: "lname",
    username: "user1",
  },
];

const Home = () => {
  return (
    <>
      <div className="row">
        {data &&
          data.map((data) => (
            <div className="col-md-3">
              <div className="cardContainer">
                <div
                  className="profile"
                  style={{
                    backgroundColor: getProfilePhotoColor(
                      data.fist_name,
                      30,
                      80
                    ),
                  }}
                >
                  {getInitial(data.fist_name)}
                </div>
                <div className="name">{`${data.fist_name} ${data.last_name}`}</div>
                <div className="operations">
                  <div className="edit">
                    <img src="/pen.svg" alt="edit_icon" />
                  </div>
                  <div className="delete">
                    <img src="/trash.svg" alt="delete_icon" />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Home;
