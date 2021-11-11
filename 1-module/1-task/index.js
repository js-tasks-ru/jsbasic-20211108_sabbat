function factorial(n) {
    if (!n) {
        return 1;
    } else {
        let x = 1;

        for(let i = 2; i <= n; i++) {    
            x = x * i;
        }

        return x;
    }
}


// alert ( factorial(0) );
// alert ( factorial(1) );
// alert ( factorial(3) );
// alert ( factorial(5) );