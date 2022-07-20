// L'esempio di due funzioni da comporre:
const succ = x => x+1
const double = x => x*2
const a = 5

// Prima soluzione: composizione esplicita
console.log('prima soluzione: ' + succ(double(a)))

// Seconda soluzione:
// (meta-)funzione di composizione con argomento dichiarato...
const comp0 = (g, f, x) => g(f(x))
console.log('seconda soluzione: ' + comp0(succ, double, a))

// ... che dunque si può usare anche così:
const succ_double0 = x => comp0(succ, double, x)
console.log('ancora seconda soluzione: ' + succ_double0(a))

// (mentre questo...
//const succ_double0 = comp0(succ,double)
//console.log(succ_double0(a))
// ... non funziona, dato che comp0 richiede tre argomenti)

// Terza soluzione:
// (meta-)funzione di composizione che restituisce una funzione...
const comp1 = (g,f) => { return x => g(f(x)) }
// ... che dunque si usa così:
const succ_double1 = comp1(succ, double)
console.log('terza soluzione: ' + succ_double1(a))
