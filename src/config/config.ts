if (process.env.NODE_ENV !== 'production') require ('dotenv').config();

// app
const API_PORT = process.env.API_PORT || 3000;

const API_VERSION = process.env.API_VERSION || 'v1';

const API_BASE_URL = process.env.API_URL || `http://localhost:${API_PORT}/api/${API_VERSION}`;

const APP_NAME = process.env.REACT_APP_NAME || 'React App';

const APP_VERSION = process.env.REACT_APP_VERSION || 'V0.0.1';

// contact 
const AUTHOR_GITHUB_URL = process.env.REACT_APP_AUTHOR_GITHUB_URL || 'https://github.com/C0rv0dev'

const AUTHOR_NAME = process.env.REACT_APP_AUTHOR_NAME || 'Lucas Costa Couto'

const config = {
    port: API_PORT,
    api_version: API_VERSION,
    api_base_url: API_BASE_URL,
    app_name: APP_NAME,
    app_version: APP_VERSION,
    author_github_url: AUTHOR_GITHUB_URL,
    author_name: AUTHOR_NAME,
};

export default config;
