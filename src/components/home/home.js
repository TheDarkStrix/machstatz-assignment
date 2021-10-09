import { useState, useEffect } from "react";
import axios from "axios";
import { getInitial, getProfilePhotoColor } from "../../shared/constants";
import { urls } from "../../shared/urls";
import "./home.css";

// const data = [
//   {
//     _id: {
//       $oid: "615084b7cfae4ed0f0e2c088",
//     },
//     email: "user1@email.com",
//     fist_name: "fname",
//     last_name: "lname",
//     username: "user1",
//   },
// ];

const Home = () => {
  const [data, setData] = useState(null);
  const fetchUsers = async () => {
    const response = await axios.get(urls.allUsers);
    if (response.data) {
      console.log(response.data);
      setData(response.data);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <>
      {data && data.length > 0 ? (
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
                  <div className="name text-truncate d-block">{`${data.fist_name} ${data.last_name}`}</div>
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
      ) : (
        <div className="noUsers">No Users to display</div>
      )}
    </>
  );
};

export default Home;
