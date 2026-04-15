// API Configuration
// Load from environment variable or use default
const API_CONFIG = {
  baseURL: window.ENV?.API_URL || 'https://whatsapp.api.luisant.cloud'
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = API_CONFIG;
}
