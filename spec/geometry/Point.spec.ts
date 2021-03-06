import Point from '../../src/geometry/Point';

describe('Point class', () => {

  it('should create an instance with 0,0 as coordindates', () => {
    const point = new Point();

    expect(point.x).toBe(0);
    expect(point.y).toBe(0);
  });

  it('should create an instance with the given coordinates', () => {
    const point = new Point(10, 20);

    expect(point.x).toBe(10);
    expect(point.y).toBe(20);
  });

  it('should update the x coordinate of the Point object', () => {
    const point = new Point(0, 0);
    point.x = 10;

    expect(point.x).toBe(10);
  });

  it('should update the y coordindate of the Point object', () => {
    const point = new Point(0, 0);
    point.y = 10;

    expect(point.y).toBe(10);
  });

});
