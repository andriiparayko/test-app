import { Button, Card, Typography } from "antd";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import Box from "../../../../components/Box";

const UserDetails = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const user = useSelector((state) =>
    state.users.list.find((user) => String(user.id) === String(id))
  );

  const handleBackClick = () => {
    navigate("/users");
  };

  const { name, username, email, phone } = user || {};
  const { firstname, lastname } = name || {};

  const isData = [firstname, lastname, username, email, phone].some(Boolean);

  return (
    <>
      {!isData && (
        <Box
          $width="100%"
          $height="100%"
          $justifyContent="center"
          $alignItems="center"
        >
          No user data available
        </Box>
      )}
      {isData && (
        <Card
          title="User Details"
          extra={
            <Box $paddingTop="16px">
              <Button
                type="primary"
                onClick={handleBackClick}
                style={{ marginBottom: 16 }}
              >
                Back
              </Button>
            </Box>
          }
        >
          <Card.Grid style={{ width: "50%" }} hoverable={false}>
            <Typography.Text strong>First Name: </Typography.Text>
            {firstname}
          </Card.Grid>
          <Card.Grid style={{ width: "50%" }} hoverable={false}>
            <Typography.Text strong>Last Name: </Typography.Text>
            {lastname}
          </Card.Grid>
          <Card.Grid style={{ width: "50%" }} hoverable={false}>
            <Typography.Text strong>Username: </Typography.Text>
            {username}
          </Card.Grid>
          <Card.Grid style={{ width: "50%" }} hoverable={false}>
            <Typography.Text strong>Email: </Typography.Text>
            {email}
          </Card.Grid>
          <Card.Grid style={{ width: "100%" }} hoverable={false}>
            <Typography.Text strong>Phone: </Typography.Text>
            {phone}
          </Card.Grid>
        </Card>
      )}
    </>
  );
};

export default UserDetails;
