/* eslint-disable no-continue */
export const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
    // <- обратите внимание, описание "засекречено"
    },
  ],
};

export default function specAttack(destructuring) {
  const { special } = destructuring;
  for (const elem of special) {
    if (elem.description === undefined) {
      elem.description = 'Описание недоступно';
    }
  }
  return special;
}

specAttack(character);
