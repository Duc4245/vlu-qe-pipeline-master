// auth.regression.test.js
// Quality Gate 2: Regression Test - full exception coverage.

const { login } = require('./auth');

describe('Regression Test - Login exceptions', () => {
  test('Sai mật khẩu -> false', () => {
    expect(login('admin', 'wrongpass')).toBe(false);
  });

  test('Username rỗng -> false', () => {
    expect(login('', '123')).toBe(false);
  });

  test('Username chỉ chứa khoảng trắng -> false', () => {
    expect(login('   ', '123')).toBe(false);
  });

  test('Mật khẩu chứa ký tự đặc biệt sai -> false', () => {
    expect(login('admin', '!@#$%^&*')).toBe(false);
  });

  test('Tài khoản bị khóa (locked) -> false', () => {
    expect(login('locked_user', 'abc123')).toBe(false);
  });

  test('Tài khoản không tồn tại -> false', () => {
    expect(login('unknown_user', '123')).toBe(false);
  });

  test('Mật khẩu rỗng -> false', () => {
    expect(login('admin', '')).toBe(false);
  });
});
