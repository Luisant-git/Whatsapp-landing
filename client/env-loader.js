// Environment Variable Loader for Vanilla JavaScript
// This script loads .env file and makes variables available globally

(function() {
  // Create global ENV object
  window.ENV = window.ENV || {};

  // Function to load .env file
  async function loadEnv() {
    try {
      const response = await fetch('.env');
      if (!response.ok) {
        console.warn('.env file not found, using defaults');
        return;
      }
      
      const text = await response.text();
      const lines = text.split('\n');
      
      lines.forEach(line => {
        // Skip comments and empty lines
        if (line.trim().startsWith('#') || !line.trim()) {
          return;
        }
        
        // Parse KEY=VALUE
        const [key, ...valueParts] = line.split('=');
        if (key && valueParts.length > 0) {
          const value = valueParts.join('=').trim();
          window.ENV[key.trim()] = value;
        }
      });
      
      console.log('Environment variables loaded:', Object.keys(window.ENV));
    } catch (error) {
      console.warn('Could not load .env file:', error.message);
    }
  }

  // Load environment variables
  loadEnv();
})();
