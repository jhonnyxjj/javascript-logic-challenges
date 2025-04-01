const { checkMovement } = require('../board');

describe('checkMovement', () => {
  const board = [
    [0, 1, 0, 0, 1, 0, 0, 0],
    [1, 0, 0, 1, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 0, 0, 0],
    [1, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0, 0, 1, 0],
    [1, 1, 0, 0, 1, 0, 0, 1],
    [0, 0, 0, 1, 0, 0, 0, 0],
  ];

  test('deve mover para uma posição válida (dentro do tabuleiro) e livre (valor 0)', () => {
    const position = { x: 2, y: 2 };
    const direction = 'UP';
    expect(checkMovement(board, position, direction)).toBe(true); // célula livre
  });

  test('deve retornar falso para uma posição válida mas ocupada (valor 1)', () => {
    const position = { x: 1, y: 0 };
    const direction = 'DOWN';
    expect(checkMovement(board, position, direction)).toBe(false); // célula ocupada
  });

  test('deve lançar erro ao tentar mover para fora do tabuleiro (x < 0)', () => {
    const position = { x: 0, y: 0 };
    const direction = 'LEFT';
    expect(() => checkMovement(board, position, direction)).toThrow("INVALID MOVEMENT");
  });

  test('deve lançar erro ao tentar mover para fora do tabuleiro (y < 0)', () => {
    const position = { x: 0, y: 0 };
    const direction = 'UP';
    expect(() => checkMovement(board, position, direction)).toThrow("INVALID MOVEMENT");
  });

  test('deve lançar erro ao tentar mover para fora do tabuleiro (x > 7)', () => {
    const position = { x: 7, y: 7 };
    const direction = 'RIGHT';
    expect(() => checkMovement(board, position, direction)).toThrow("INVALID MOVEMENT");
  });

  test('deve lançar erro ao tentar mover para fora do tabuleiro (y > 7)', () => {
    const position = { x: 7, y: 7 };
    const direction = 'DOWN';
    expect(() => checkMovement(board, position, direction)).toThrow("INVALID MOVEMENT");
  });

  test('deve lançar erro ao usar uma direção inválida', () => {
    const position = { x: 3, y: 3 };
    const direction = 'DIAGONAL';
    expect(() => checkMovement(board, position, direction)).toThrow("INVALID MOVEMENT");
  });
});
