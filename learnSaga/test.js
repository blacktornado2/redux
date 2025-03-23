// Generator functions
// - Generator functions are special functions that can be paused and resumed later, 
// - Use: asynchronous programming, LAZY evaluation
//-  They are created using the function* syntax
// - A generator function returns a generator object, pause: using yield keyword, resume: using next() method

// Generator objects:
// - When a generator function is called, it doesn't execute immediately. Instead, it returns a generator object, which is an iterator
// - The generator object has a next() method that returns an object with two properties: value and done
// - value is the value returned by the yield or return keyword, and done is a boolean that indicates whether the generator function has finished
// - Generators can also receive values from the outside using the next() method(Example 3)

// yield keyword:
// - The yield keyword pauses the generator function's execution and returns a value.
// - Each time next() is called, the function resumes from where it left off (after the last yield).


// Example 1
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const generator = numberGenerator();

console.log(generator.next());  // { value: 1, done: false }
console.log(generator.next());  // { value: 2, done: false }
console.log(generator.next());  // { value: 3, done: false }
console.log(generator.next());  // { value: undefined, done: true }

// Example 2
function* evenNumbers(max) {
    for (let i = 0; i <= max; i += 2) {
        if (i % 2 === 0) {
            yield i;
        }
    }
}

const evenNumberGenerator = evenNumbers(7);
for (const num of evenNumberGenerator) {
    console.log(num); // Output: 0, 2, 4, 6
}

// Explanation: for of loop calls the generatorObject.next() and the value is returned in the form of num variable implicitly

// Example 3
// An example of passing a value to next()

function* sayHelloThenReceive() {
    console.log('Hello!');
    const received = yield; //yield with no value
    console.log('Received:', received);
}

const myGenerator = sayHelloThenReceive();

myGenerator.next(); // Hello!
myGenerator.next('World'); // Received: World

// Example 4
//An example with return

function* genWithReturn() {
    yield 1;
    return 2;
    yield 3; // unreachable
}

const genReturn = genWithReturn();

console.log(genReturn.next()); //{value: 1, done: false}
console.log(genReturn.next()); //{value: 2, done: true}
console.log(genReturn.next()); //{value: undefined, done: true}

// Shows how the return statement ends the generator function.
// Any yielded values after the return statement are not processed

// Example 5
function* interact() {
    const received = yield 'Hello?';
    console.log('You said:', received);
    const another = yield 'Anything else?';
    console.log('And then you said:', another);
}

const interaction = interact();

console.log(interaction.next().value); // Hello? 
console.log(interaction.next('World').value); // Anything else?
console.log(interaction.next('Goodbye')); // And then you said: Goodbye

// Correct answer: Hello? > You said: World > Anything else? > And then you said: Goodbye