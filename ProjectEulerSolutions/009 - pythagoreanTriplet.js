var calculatePythagoreanTriplet = (n) => {
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

var calculateSumOfTriplet = (value) => {

    let pythagoreanTriples = calculatePythagoreanTriplet(value);

    for (let i = 0; i < pythagoreanTriples.triples.length; i++) {
        let a = pythagoreanTriples.triples[i].cathetus.a;
        let b = pythagoreanTriples.triples[i].cathetus.b;
        let c = pythagoreanTriples.triples[i].hypotenuse;

        if (a+b+c === value) {
            return {
                'a': a,
                'b': b,
                'c': c,
                'value': value
            }
        }
    }
    return 'Not Found'
}

let multiply1000PythagoreanTriple = (answer = calculateSumOfTriplet(1000)) => {
    return answer.a * answer.b * answer.c;
}