// API Configuration
const API_CONFIG = {
    BASE_URL: process.env.REACT_APP_API_URL || 'http://localhost:8080',
    ENDPOINTS: {
        CHATBOT_STATUS: '/api/chatbot/status',
        CHATBOT_CHAT: '/api/chatbot/chat',
        CHATBOT_SUGGESTIONS: '/api/chatbot/suggestions',
        CHATBOT_KUMBH_INFO: '/api/chatbot/kumbh-info'
    }
};

export const getApiUrl = (endpoint) => `${API_CONFIG.BASE_URL}${endpoint}`;

export default API_CONFIG;
