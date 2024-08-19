
import { describe, it, expect } from 'vitest';
import { sum } from '../utils';

describe('Sum Function', () => {
  it('should correctly sum two numbers', () => {
    const result = sum(2, 3);
    expect(result).toBe(5);
  });

  it('should correctly handle negative numbers', () => {
    const result = sum(-2, -3);
    expect(result).toBe(-5);
  });

  it('should return the same number when adding zero', () => {
    const result = sum(5, 0);
    expect(result).toBe(5);
  });
});
