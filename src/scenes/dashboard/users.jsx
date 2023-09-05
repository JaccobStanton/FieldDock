import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import { useState } from "react";
import CommonRow from "../../components/NavBar/NavBar";
import "../../CSS/users.css";

function Users() {
  //----------------------------logic for create new user/edit existing users---------------------
  const [isCreateUserHovered, setCreateUserHovered] = useState(false);
  const [isEditUserHovered, setEditUserHovered] = useState(false);

  const handleCreateUserMouseEnter = () => {
    setCreateUserHovered(true);
  };

  const handleCreateUserMouseOut = () => {
    setCreateUserHovered(false);
  };

  const handleEditUserMouseEnter = () => {
    setEditUserHovered(true);
  };

  const handleEditUserMouseOut = () => {
    setEditUserHovered(false);
  };

  const createUserButtonClassName = isCreateUserHovered
    ? "create-user-button-hovered"
    : "create-user-button";
  const editUserButtonClassName = isEditUserHovered
    ? "edit-existing-user-hovered"
    : "edit-existing-user";

  //----------------------------logic for create new user/edit existing users END---------------------

  return (
    <Container fluid>
      <div>
        <CommonRow />
      </div>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <div className="user-header-title-box">
            <div className="user-title">Users</div>
          </div>
          <div className="entire-second-row">
            <div className="button-row">
              <button
                className={createUserButtonClassName}
                onMouseEnter={handleCreateUserMouseEnter}
                onMouseOut={handleCreateUserMouseOut}
              >
                Create a new user
              </button>
              <button
                className={editUserButtonClassName}
                onMouseEnter={handleEditUserMouseEnter}
                onMouseOut={handleEditUserMouseOut}
              >
                Edit existing user
              </button>
            </div>
          </div>
        </Col>
        {/* -------------------------------------------------PARENT column row 2 END ----------------------------- */}
      </Row>
    </Container>
  );
}

export default Users;
