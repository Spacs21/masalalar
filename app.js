// 10 ta "For" masala

// task 1
{
    let k = 5;
    let n = 3;
    
    for (let i = 0; i < n; i++) {
      console.log(k);
    }
}

// task 2
{

    let a = 2; 
    let b = 6; 


    let count = 0;

    console.log("Butun sonlar:");


    for (let i = a; i <= b; i++) {
    console.log(i);
    count++;
    }

    console.log("Chiqarilgan sonlar soni:", count);
}

// task 3
{
    let a = 2;
    let b = 6;

    for (let i = b; i >= a; i--) {
    console.log(i);
    }
}

// task 4
{
    let price = 2;

    for (let i = 1; i <= 10; i++) {
    console.log(i + " kg =", i * price);
    }
}

// for 5
{
    let price = 2;

    for (let i = 0.1; i <= 1; i += 0.1) {
    console.log(i.toFixed(1) + " kg =", i * price);
    }
}

// for 6
{
    let price = 2;

    for (let i = 1.2; i <= 2; i += 0.2) {
    console.log(i.toFixed(1) + " kg =", i * price);
    }
}

// for 7
{
    let a = 2;
    let b = 6;
    let sum = 0;

    for (let i = a; i <= b; i++) {
    sum += i;
    }

    console.log("Sum =", sum);
}

// for 8
{
    let a = 2;
    let b = 6;
    let product = 1;

    for (let i = a; i <= b; i++) {
    product *= i;
    }

    console.log("Product =", product);
}

// for 9
{
    let a = 2;
    let b = 6;
    let sumOfSquares = 0;

    for (let i = a; i <= b; i++) {
    sumOfSquares += i * i;
    }

    console.log("Sum of squares =", sumOfSquares);
}

// for 10
{
    let n = 5;
    let sum = 0;

    for (let i = 1; i <= n; i++) {
    sum += 1 / i;
    }

    console.log("Sum =", sum);
}

// endi "while" masalasi

// task 1
{
    let A = 20;
    let B = 6;

    while (A >= B) {
    A -= B;
    }

    console.log("Remaining:", A);
}

// task 2
{
    let A = 20;
    let B = 6;
    let count = 0;
    
    while (A >= B) {
      A -= B;
      count++;
    }
    
    console.log("Segments:", count);
    
}

// task 3
{
    let N = 17;
    let K = 5;
    let quotient = 0;
    
    while (N >= K) {
      N -= K;
      quotient++;
    }
    
    console.log("Quotient:", quotient);
    console.log("Remainder:", N);    
}

// task 4
{
    let n = 27;
    let result = "3 - ning darajasi emas";
    
    while (n > 1) {
      if (n % 3 !== 0) break;
      n /= 3;
      if (n == 1) result = "3 - ning darajasi";
    }
    
    console.log(result);
    
}

// task 5
{
    let n = 16;
    let k = 0;
    let power = 1;
    
    while (power < n) {
      power *= 2;
      k++;
    }
    
    console.log("k =", k);
    
}

// task 6
{
    let n = 5;
    let result = 1;
    
    while (n > 1) {
      result *= n;
      n -= 2;
    }
    
    console.log("n!! =", result);
    
}

// task 7
{
    let n = 17;
    let k = 0;
    
    while (k * k < n) {
      k++;
    }
    
    console.log("k =", k);
    
}

// task 8
{
    let n = 17;
    let k = 0;
    
    while (k * k <= n) {
      k++;
    }
    
    console.log("k =", k - 1);
    
}

// task 9
{
    let n = 30;
    let k = 0;
    let power = 1;
    
    while (power <= n) {
      power *= 3;
      k++;
    }
    
    console.log("k =", k - 1);
    
}

// task 10
{
    let n = 30;
    let k = 0;
    let power = 1;
    
    while (power <= n) {
      power *= 3;
      k++;
    }
    
    console.log("k =", k - 1);
    
}

// misc
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
  }
}

window.addEventListener('load', () => {
  const audio = document.getElementById('audio');
  audio.volume = 0.3; // Set the default volume to 30%
});
