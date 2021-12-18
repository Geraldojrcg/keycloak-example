import axios from "axios";
import React from "react";
import { validateAuth } from "../utils/auth";
import styles from "../styles/Home.module.css";

function UsersPage({ users = [] }) {
  return (
    <div>
      <h1 className={styles.title}>Users</h1>
      <ul>
        {users.map((user) => (
          <li className={styles.description}>
            {user.firstName} {user.lastName} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersPage;

export const getServerSideProps = async (ctx) => {
  const token = validateAuth(ctx.req);
  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }
  try {
    const { data } = await axios.get("http://localhost:8082/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return {
      props: {
        users: data,
      },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
};
