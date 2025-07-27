import client from "./common-client";

export const getUsers = () => client.get("/users");
