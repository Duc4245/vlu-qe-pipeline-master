// auth.smoke.test.js
// Quality Gate 1: Smoke Test - only checks the core "happy path" login.

const { login } = require('./auth');

test('Smoke Test: đăng nhập đúng (admin/123) trả về true', () => {
  expect(login('admin', '123')).toBe(true);
});
