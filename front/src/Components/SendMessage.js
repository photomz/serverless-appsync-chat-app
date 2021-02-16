import React, { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { createMessage as CREATE_MESSAGE } from "../graphql/mutations";

const NewMessageBox = () => {
  const [body, setBody] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [sendMessage, { loading, error }] = useMutation(gql(CREATE_MESSAGE));

  const handleChange = (e) => setBody(e.target.value);
  const submit = async (e) => {
    e.preventDefault();
    await sendMessage({ variables: { body } });
    setBody("");
  };

  return (
    <form
      onSubmit={(e) => submit(e)}
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: "60px",
      }}
    >
      <input
        value={body}
        name="body"
        placeholder="body"
        onChange={handleChange}
        className="message-input"
        style={{
          border: "none",
          borderTop: "1px solid #ddd",
          fontSize: "16px",
          padding: "30px",
          width: "100%",
        }}
      />
    </form>
  );
};

export default NewMessageBox;
