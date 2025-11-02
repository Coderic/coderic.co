/**
 * Auth0 Authentication Module
 * Handles user authentication and session management
 */

// Auth0 Configuration
const AUTH_CONFIG = {
  clientID: 'In43D8hfptI5B17Xo7XZX4aBkhfMuH56',
  domain: 'auth.coderic.org',
  audience: 'https://coderic.eu.auth0.com/userinfo',
  scope: 'openid profile email',
  redirectUri: 'https://coderic.co/callback',
  responseType: 'token id_token'
};

// Initialize Auth0 WebAuth instance
let webAuth;
if (typeof auth0 !== 'undefined' && auth0.WebAuth) {
  webAuth = new auth0.WebAuth(AUTH_CONFIG);
} else {
  console.error('Auth0 SDK not loaded');
}

/**
 * Initialize user login flow
 */
function login() {
  if (!webAuth) {
    console.error('Auth0 not initialized');
    return;
  }
  
  try {
    webAuth.authorize({
      audience: AUTH_CONFIG.audience,
      scope: AUTH_CONFIG.scope,
      redirectUri: AUTH_CONFIG.redirectUri
    });
  } catch (error) {
    console.error('Login error:', error);
  }
}

/**
 * Initialize user logout flow
 */
function logout() {
  if (!webAuth) {
    console.error('Auth0 not initialized');
    return;
  }
  
  try {
    webAuth.logout({
      returnTo: 'https://coderic.co/logout'
    });
  } catch (error) {
    console.error('Logout error:', error);
  }
}

/**
 * Check user session and update UI accordingly
 */
function load() {
  if (!webAuth) {
    console.error('Auth0 not initialized');
    showGuestView();
    return;
  }

  webAuth.checkSession(
    {
      audience: AUTH_CONFIG.audience,
      scope: AUTH_CONFIG.scope,
    },
    function (err, result) {
      if (err || !result || !result.accessToken) {
        console.log('User not authenticated or session expired');
        showGuestView();
      } else {
        getUserInfo(result.accessToken);
        showAuthenticatedView();
      }
    }
  );
}

/**
 * Get user information from Auth0
 * @param {string} accessToken - The access token from Auth0
 */
function getUserInfo(accessToken) {
  if (!webAuth || !accessToken) {
    return;
  }

  webAuth.client.userInfo(accessToken, function (err, user) {
    if (err) {
      console.error('Error getting user info:', err);
      return;
    }

    if (user && user.name) {
      const usernameElement = document.getElementById('username');
      if (usernameElement) {
        usernameElement.textContent = user.name;
        usernameElement.style.display = '';
      }
    }
  });
}

/**
 * Show guest view (hide authenticated elements)
 */
function showGuestView() {
  const guestElements = document.querySelectorAll('.guest');
  const authenticatedElements = document.querySelectorAll('.authenticated');
  
  guestElements.forEach(el => {
    if (el.style) el.style.display = '';
  });
  
  authenticatedElements.forEach(el => {
    if (el.style) el.style.display = 'none';
  });
}

/**
 * Show authenticated view (hide guest elements)
 */
function showAuthenticatedView() {
  const guestElements = document.querySelectorAll('.guest');
  const authenticatedElements = document.querySelectorAll('.authenticated');
  
  guestElements.forEach(el => {
    if (el.style) el.style.display = 'none';
  });
  
  authenticatedElements.forEach(el => {
    if (el.style) el.style.display = '';
  });
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', load);
} else {
  load();
}

// Expose functions globally for backward compatibility
if (typeof window !== 'undefined') {
  window.login = login;
  window.logout = logout;
  window.load = load;
}
