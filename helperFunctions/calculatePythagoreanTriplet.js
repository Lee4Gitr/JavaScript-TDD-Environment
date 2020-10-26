export var calculatePythagoreanTriplet = (n) => {
    let pythagoreanTriples = {
        triples: []
    }

    for (var a = 1; a < n - 1; a++) {
        for (var b = a; b < n; b++) {
            c = Math.sqrt(a * a + b * b);
            if (c % 1 === 0 && c < n) {
                let answer = {
                    'cathetus': { 'a': a, 'b': b },
                    'hypotenuse': c
                }
                pythagoreanTriples.triples.push(answer);
            }
        }
    }
    return pythagoreanTriples;
}