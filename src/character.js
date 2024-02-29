export function characterInfo(character) {
    if (character.health > 50) return 'healthy';
    if (character.health > 15) return 'wounded';
    return 'critical';
};

export function charactersSort(charactersArray) {
    charactersArray.sort((a, b) => b.health - a.health);
    return charactersArray;
}