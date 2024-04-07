if (process.env.NODE_ENV !== 'production') require ('dotenv').config();

const PORT = process.env.PORT || 3000;

const API_VERSION = process.env.API_VERSION || 'v1';

const API_BASE_URL = `http://localhost:${PORT}/api/${API_VERSION}`;

const APP_NAME = process.env.REACT_APP_NAME || 'React App';

const APP_VERSION = process.env.REACT_APP_VERSION || 'V0.0.1';

const config = {
    port: PORT,
    api_version: API_VERSION,
    api_base_url: API_BASE_URL,
    app_name: APP_NAME,
    app_version: APP_VERSION,
};

export default config;
