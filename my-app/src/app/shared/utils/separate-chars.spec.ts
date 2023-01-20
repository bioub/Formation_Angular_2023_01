import { separateChars } from "./separate-chars";

describe('separateChars', () => {
  it('should return h-e-l-l-o', () => {
    expect(separateChars('hello')).toBe('h-e-l-l-o');
  })

  it('should return h_e_l_l_o', () => {
    expect(separateChars('hello', '_')).toBe('h_e_l_l_o');
  });

  it('should throw', () => {
    expect(() => separateChars('')).toThrow();
  });
});
