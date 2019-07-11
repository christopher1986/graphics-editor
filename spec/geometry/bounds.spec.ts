import Bounds from '../../src/geometry/bounds';

describe('Bounds class', () => {

  it('should create an instance with the default boundary values', () => {
    const bounds = new Bounds();

    expect(bounds.x).toBe(0);
    expect(bounds.y).toBe(0);
    expect(bounds.width).toBe(0);
    expect(bounds.height).toBe(0);
  });

  it('should create an instance with the given boundary values', () => {
    const bounds = new Bounds(10, 20, 300, 150);

    expect(bounds.x).toBe(10);
    expect(bounds.y).toBe(20);
    expect(bounds.width).toBe(300);
    expect(bounds.height).toBe(150);
  });

  it('should update the location of the Bounds object', () => {
    const bounds = new Bounds(0, 0, 0, 0);
    bounds.x = 30;
    bounds.y = 40;

    expect(bounds.x).toBe(30);
    expect(bounds.y).toBe(40);
  });

  it('should update the dimension of the Bounds object', () => {
    const bounds = new Bounds(0, 0, 0, 0);
    bounds.width = 800;
    bounds.height = 600;

    expect(bounds.width).toBe(800);
    expect(bounds.height).toBe(600);
  });

});
