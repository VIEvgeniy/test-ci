import CharacterInfo from '../character';

test.each([
    [{name: 'мечник', health: 10},  'critical'],    
    [{name: 'маг', health: 100},  'healthy'],
    [{name: 'лучник', health: 40}, 'wounded']
])('test caracter %s',(caracter, expected) => {
    expect(CharacterInfo(caracter)).toBe(expected);
});