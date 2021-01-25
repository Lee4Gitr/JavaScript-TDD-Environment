import Game from '../Bowling';

let game = new Game();

test('Nothing', () => {
  expect(true).toStrictEqual(true);
})

test('1 gutter ball in the first frame returns a score of 0', () => {
  game.roll(0);
  expect(game.score()).toStrictEqual(0)
});

test('1 pin knocked down in the first frame returns a score of 1', () => {
  game.roll(1);
  expect(game.score()).toStrictEqual(1)
});
