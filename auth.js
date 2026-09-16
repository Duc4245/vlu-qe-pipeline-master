// auth.js
// Simple authentication module used for the Smoke Test & Regression Test lab.

const users = {
  admin: { password: '123', locked: false },
  locked_user: { password: 'abc123', locked: true },
};

/**
 * Attempts to log in with the given username and password.
 * @param {string} username
 * @param {string} password
 * @returns {boolean} true if login succeeds, false otherwise
 */
function login(username, password) {
  // Reject empty / non-string username
  if (typeof username !== 'string' || username.trim() === '') {
    return false;
  }

  // Reject empty / non-string password
  if (typeof password !== 'string' || password.length === 0) {
    return false;
  }

  const user = users[username];

  // Unknown account
  if (!user) {
    return false;
  }

  // Locked account
  if (user.locked) {
    return false;
  }

  // Wrong password (covers wrong password & special-character password cases)
  if (user.password !== password) {
    return false;
  }

  return true;
}

module.exports = { login };
