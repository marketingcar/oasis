import GhostContentAPI from '@tryghost/content-api';

// Create API instance with your Ghost site credentials
const api = new GhostContentAPI({
  url: 'https://oasis.marketingcarcontent.com',
  key: 'dac5098ae92e739703c202ce3e',
  version: 'v5'
});

export default api;
