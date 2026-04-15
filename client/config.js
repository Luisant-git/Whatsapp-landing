// API Configuration
// Load from environment variable or use default
const API_CONFIG = {
  baseURL: window.ENV?.API_URL || 'http://localhost:3010'
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = API_CONFIG;
}
