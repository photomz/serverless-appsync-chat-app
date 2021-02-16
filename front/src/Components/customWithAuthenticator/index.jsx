import { withAuthenticator } from 'aws-amplify-react';
import theme from './theme';

const federatedConfig = {
  // facebook_app_id: '641770369580575',
  // google_client_id: '603532417884-1lse8209bfbisleb1cl313f20cnn72es.apps.googleusercontent.com',
};

const customWithAuthenticator = app => withAuthenticator(app, false, [], federatedConfig, theme);

export default customWithAuthenticator;
