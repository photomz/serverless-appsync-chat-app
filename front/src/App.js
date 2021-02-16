import React, { useState, useEffect } from "react";
import { Auth } from "aws-amplify";
import customWithAuthenticator from "./Components/customWithAuthenticator";

import * as queries from "./graphql/queries";
import * as subscriptions from "./graphql/subscriptions";

import MessagesList from "./Components/MessagesList";
import NewMessageBox from "./Components/SendMessage";
import { gql, useQuery, useSubscription } from "@apollo/client";

const App = () => {
  const [username, setUsername] = useState("");
  const [messages, setMessages] = useState([]);
  const { data: query, loading: queryLoading, error: queryError } = useQuery(
    gql(queries.getMessages)
  );
  const { data: sub, error: subError } = useSubscription(
    gql(subscriptions.addMessage),
    {
      shouldResubscribe: true,
    }
  );

  useEffect(() => {
    (async () => {
      const { username: newUsername } = await Auth.currentAuthenticatedUser();
      setUsername(newUsername);
    })();
  }, []);

  useEffect(() => {
    if (query && query.getMessages)
      setMessages((prev) => [...prev, ...query.getMessages]);
  }, [query]);
  useEffect(() => {
    if (sub && sub.addMessage) setMessages((prev) => [...prev, sub.addMessage]);
  }, [sub]);

  if (queryError || subError) return <h3>Error: {queryLoading || subError}</h3>;
  // Subscription will always be loading
  if (queryLoading) return <h3>Loading...</h3>;

  return (
    <div
      style={{
        height: "calc(100vh - 79px)",
        overflowY: "scroll",
        overflowX: "hidden",
      }}
    >
      <MessagesList messages={messages} username={username} />;
      <NewMessageBox />
    </div>
  );
};

export default customWithAuthenticator(App);
