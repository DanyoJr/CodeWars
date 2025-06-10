function isLetter(char) {
    return /[a-zA-Z]/.test(char);
}

function getCapitalizationMap(word) {
    return [...word].map(char => char === char.toUpperCase());
}

function applyCapitalization(word, capMap) {
    return [...word].map((char, i) =>
        capMap[i] ? char.toUpperCase() : char.toLowerCase()
    ).join('');
}

function translateToPigLatin(word) {
    const vowels = 'aeiouAEIOU';
    const firstVowelIndex = [...word].findIndex(char => vowels.includes(char));

    if (firstVowelIndex === -1) {
        return word + 'ay';
    } else if (firstVowelIndex === 0) {
        return word + 'way';
    } else {
        const start = word.slice(0, firstVowelIndex);
        const end = word.slice(firstVowelIndex);
        return end + start + 'ay';
    }
}

function translate(text) {
  return text.replace(/\b\w+([^\w\s]*)/g, (match, punctuation = '') => {
        const wordOnly = match.replace(/[^\w]/g, '');
        const capMap = getCapitalizationMap(wordOnly);
        const lowerWord = wordOnly.toLowerCase();

        const pigLatin = translateToPigLatin(lowerWord);
        const finalWord = applyCapitalization(pigLatin, capMap);

        return finalWord + (punctuation || '');
    });
}
