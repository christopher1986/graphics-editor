import Point from '../../src/geometry/point';

describe('Point class', () => {

  it('should create an instance with the given coordinates', () => {
    const point = new Point(10, 20);

    expect(point.x).toBe(10);
    expect(point.y).toBe(20);
  });

  it('should update the x coordinate', () => {
    const point = new Point(0, 0);
    point.x = 10;

    expect(point.x).toBe(10);
  });

  it('should update the y coordindate', () => {
    const point = new Point(0, 0);
    point.y = 10;

    expect(point.y).toBe(10);
  });

});
