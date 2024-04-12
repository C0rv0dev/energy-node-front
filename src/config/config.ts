const APP_ENV = import.meta.env.VITE_APP_NODE_ENV || 'development';

// app
const API_PORT = import.meta.env.VITE_APP_API_PORT || 3000;
const API_VERSION = import.meta.env.VITE_APP_API_VERSION || 'v1';
const API_BASE_URL = import.meta.env.VITE_APP_API_URL || `http://localhost:${API_PORT}/api/${API_VERSION}`;
const APP_NAME = import.meta.env.VITE_APP_NAME || 'React App';
const APP_VERSION = import.meta.env.VITE_APP_VERSION || 'V0.0.1';

// contact 
const AUTHOR_GITHUB_URL = import.meta.env.VITE_APP_AUTHOR_GITHUB_URL || 'https://github.com/C0rv0dev'
const AUTHOR_NAME = import.meta.env.VITE_APP_AUTHOR_NAME || 'Lucas Costa Couto'

// encryption
const ENCRYPTION_SECRET = import.meta.env.VITE_APP_ENCRYPTION_KEY || 'test';

const config = {
    env: APP_ENV,
    port: API_PORT,
    app_name: APP_NAME,
    api_version: API_VERSION,
    app_version: APP_VERSION,
    author_name: AUTHOR_NAME,
    api_base_url: API_BASE_URL,
    author_github_url: AUTHOR_GITHUB_URL,
    encryption_secret: ENCRYPTION_SECRET,
};

export default config;
