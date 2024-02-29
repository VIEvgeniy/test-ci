import { charactersSort } from '../character';

test('test characters sorting',() => {
    const result = charactersSort([
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80}
      ]);
    expect(result).toEqual([
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10}
      ]);
  })