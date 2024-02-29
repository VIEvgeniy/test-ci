export default function characterInfo(character) {
    if (character.healt > 50) return 'healthy';
    if (character.healt > 15) return 'wounded';
    return 'critical';
}