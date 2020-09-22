const getCarNumber = ID => {
	if (ID > 1738283877 || ID < 0) return null;
	const alphabet = 'АБВГДЕЖЗИКЛМНОПРСТУФХЧШЭЮЯ';
	const abcL = alphabet.length;
	return `${alphabet[(ID / 999 | 0) % abcL]} ${String(ID % 999 + 1).padStart(3, 0)} ${alphabet[(ID / 999 / abcL | 0) % abcL]}${alphabet[(ID / 999 / abcL / abcL | 0) % abcL]} ${String(ID % 99 + 1).padStart(2, 0)}`;
};

console.log(getCarNumber(1805)); // Б 807 АА 24
