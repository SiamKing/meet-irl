describe('Pokemon factory', () => {
  var Pokemon;

  beforeEach(angular.mock.module('api.pokemon'));

  beforeEach(inject(_Pokemon_ => {
    Pokemon = _Pokemon_;
  }));

  it('should exist', () => {
    expect(Pokemon).toBeDefined();
  });
});
