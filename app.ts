function gcd(a: number, b: number): number {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

function canOrganizeBooks(shelf: number[]): string {
    const bookCounts: Record<number, number> = {};
    for (let book of shelf) {
        bookCounts[book] = (bookCounts[book] || 0) + 1;
    }

    const frequencies = Object.values(bookCounts);

    let currentGCD = frequencies[0];
    for (let i = 1; i < frequencies.length; i++) {
        currentGCD = gcd(currentGCD, frequencies[i]);
        if (currentGCD === 1) {
            return "NO";
        }
    }

    return currentGCD > 1 ? "YES" : "NO";
}

const shelf: number[] = [
    1234567, 1234567, 2345678, 2345678, 3456789, 3456789,
    1234567, 2345678, 3456789, 4567890, 4567890, 5678901,
    5678901, 6789012, 6789012, 1234567, 2345678, 3456789,
    4567890, 5678901, 4567890, 5678901
];

console.log(canOrganizeBooks(shelf));
