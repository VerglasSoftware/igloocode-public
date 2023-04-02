import React from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

import Layout from "../../components/dashboard/layout";

export default function Index() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
        <Layout title={"Dashboard"}>
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <a href="/api/auth/logout">Logout</a>
      </div>
      </Layout>
    )
  );
}
