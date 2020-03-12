import PlayerFactory from '@factories/PlayerFactory';

describe('generating Players', () => {
  it('can generate a player', () => {
    expect.hasAssertions();

    const player = PlayerFactory();

    expect(player.name).not.toBeNull();
    expect(player.price).not.toBeNull();
    expect(player.positions).toHaveLength(1);
  });

  it('can generate a DPP player', () => {
    expect.hasAssertions();

    const player = PlayerFactory(2);

    expect(player.name).not.toBeNull();
    expect(player.price).not.toBeNull();
    expect(player.positions).toHaveLength(2);
  });
});
