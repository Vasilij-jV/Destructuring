import specAttack, { character } from '../index';

test('returned array', () => {
  const specattack = specAttack(character);
  const arrayInCharacter = [
    {
      id: 8, name: 'Двойной выстрел', icon: 'http://...', description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9, name: 'Нокаутирующий удар', icon: 'http://...', description: 'Описание недоступно',
    },
  ];

  expect(specattack).toEqual(arrayInCharacter);
});
