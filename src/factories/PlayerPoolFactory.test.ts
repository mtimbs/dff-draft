import PlayerPoolFactory from '@factories/PlayerPoolFactory';

describe('generating Player Pools', () => {
  it('can generate a player pool', () => {
    expect.hasAssertions();

    const pool = PlayerPoolFactory(100);
    expect(pool).toHaveLength(100);
  });

  it('can generate a player pool with DPPs', () => {
    expect.hasAssertions();

    const pool = PlayerPoolFactory(10, 5);
    const dpps = pool.filter((p) => p.positions.length === 2);

    expect(dpps).toHaveLength(5);
    expect(pool).toHaveLength(10);
  });
});
