import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Card, Spin, Input, Button, Typography } from "antd";
import { useNavigate } from "react-router-dom";

import Box from "../../../../components/Box";
import { fetchUsers } from "../../usersSlice";
import { getFullNameText } from "../../utils";

import { getFilteredUserList } from "./utils";

const UserList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { list, loading } = useSelector((state) => state.users);

  const [filter, setFilter] = useState("");

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredUsers = getFilteredUserList(list, filter);

  return (
    <Box $flexDirection="column" $gap="16px">
      <Box $gap="16px" $alignItems="center">
        <Typography.Text strong>Filter by name:</Typography.Text>
        <Input
          placeholder="Filter by name"
          value={filter}
          onChange={handleFilterChange}
          style={{ maxWidth: 300 }}
          allowClear
          disabled={loading}
        />
      </Box>
      <Spin spinning={loading} tip="Loading users...">
        <Row gutter={[16, 16]}>
          {filteredUsers.map((user) => {
            const { id, email } = user;

            const handleDetailsClick = () => {
              navigate(`/users/${id}`);
            };

            const fullNameText = getFullNameText(user);

            return (
              <Col xs={24} sm={12} md={8} lg={6} key={id}>
                <Card
                  title={fullNameText}
                  extra={
                    <Button type="primary" onClick={handleDetailsClick}>
                      Details
                    </Button>
                  }
                  style={{ minHeight: 150 }}
                >
                  <div>Email: {email}</div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Spin>
    </Box>
  );
};

export default UserList;
