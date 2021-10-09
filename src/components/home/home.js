import { useState, useEffect } from "react";
import axios from "axios";
import { getInitial, getProfilePhotoColor } from "../../shared/constants";
import { urls } from "../../shared/urls";
import "./home.css";
import ConfirmationModal from "../confirmationModal/confirmationModal";
import CreateUser from "../createUser/createUser";
import { Button } from "react-bootstrap";

var holdEmail;

const Home = () => {
  const [data, setData] = useState(null);
  const [confirmation, setConfirmation] = useState(false);
  const [createUser, setCreateUser] = useState(false);

  const toggleCreateUser = () => {
    setCreateUser((prev) => !prev);
  };

  const toggleConfimationModal = (email) => {
    if (email) holdEmail = email;
    console.log(holdEmail);
    setConfirmation((prev) => !prev);
  };

  const fetchUsers = async () => {
    try {
      const response = await axios.get(urls.allUsers);
      if (response.data) {
        console.log(response.data);
        setData(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async () => {
    console.log(holdEmail);
    try {
      const response = await axios.delete(urls.deleteUser(holdEmail));
      if (response.data) {
        setConfirmation(false);
        fetchUsers();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <>
      <div className="mt-3 d-flex justify-content-end">
        <Button color="primary" onClick={() => toggleCreateUser()}>
          Add New User
        </Button>
      </div>
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
                    <div
                      className="delete"
                      onClick={() => toggleConfimationModal(data.email)}
                    >
                      <img src="/trash.svg" alt="delete_icon" />
                    </div>
                  </div>
                </div>
              </div>
            ))}

          {/* confirmationModal */}

          <ConfirmationModal
            title="Confirm Delete"
            modalDescription="Are you you want to delete the user ?"
            buttonText="Delete"
            forwardFnc={deleteUser}
            toggle={toggleConfimationModal}
            modal={confirmation}
          />

          <CreateUser
            modal={createUser}
            toggle={toggleCreateUser}
            fetchAgain={fetchUsers}
          />
        </div>
      ) : (
        <div className="noUsers">No Users to display</div>
      )}
    </>
  );
};

export default Home;
