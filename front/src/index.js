import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import {
  ApolloClient,
  from,
  HttpLink,
  InMemoryCache,
  split,
  ApolloProvider,
} from "@apollo/client";
import { createAuthLink } from "aws-appsync-auth-link";
import { createSubscriptionHandshakeLink } from "aws-appsync-subscription-link";
import Amplify, { Auth } from "aws-amplify";
import awsConfig from "./aws-exports";

import stack from "./stack.json";

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: stack.Region,
    userPoolId: stack.UserPoolId,
    identityPoolId: stack.IdentityPoolId,
    userPoolWebClientId: stack.UserPoolClientId,
  },

  aws_appsync_graphqlEndpoint: stack.GraphQlApiUrl,
  aws_appsync_region: stack.Region,
  aws_appsync_authenticationType: "AMAZON_COGNITO_USER_POOLS",
});

const appSyncSettings = {
  auth: {
    type: awsConfig.aws_appsync_authenticationType,
    jwtToken: Auth.currentSession().then((session) =>
      session.getAccessToken().getJwtToken()
    ),
  },
  url: awsConfig.aws_appsync_graphqlEndpoint,
  region: awsConfig.aws_appsync_region,
};

const httpLink = new HttpLink({
  uri: awsConfig.aws_appsync_graphqlEndpoint,
});
const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([
    createAuthLink(appSyncSettings),
    split(
      (op) => {
        const { operation } = op.query.definitions[0];

        if (operation === "subscription") {
          return false;
        }
        return true;
      },
      httpLink,
      createSubscriptionHandshakeLink(appSyncSettings, httpLink)
    ),
  ]),
});

const Root = () => (
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>
);

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
