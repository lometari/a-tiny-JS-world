import { print } from './js/lib.js';
/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: https://github.com/lometari/a-tiny-JS-world
   Web app: _put project's github pages URL here_
   */

// ======== OBJECTS DEFINITIONS ========
// Define your objects here
const man = {
    hands: 2,
    legs: 2,
    name: 'Joey',
    gender: 'male',
    say: 'How you doin\'?'
};
const woman = {
    hands: 2,
    legs: 2,
    name: 'Phoebe',
    gender: 'female',
    say: 'Smelly ca-a-a-a-at!'
};
const dog = {
    hands: 0,
    legs: 4,
    name: 'Alfa',
    gender: 'female',
    say: 'Bow-wow!'
};
const cat = {
    hands: 0,
    legs: 4,
    name: 'Tima',
    gender: 'male',
    say: 'Meow!'
};
const catWoman ={
    hands: 2,
    legs: 2,
    name: 'Halle',
    gender: 'female',
    say: cat.say,
};

// ======== OUTPUT ========
/* Use print(message) for output.
   Default tag for message is <pre>. Use print(message,'div') to change containing element tag.

   Message can contain HTML markup. You may also tweak index.html and/or styles.css.
   However, please, REFRAIN from improving visuals at least until your code is reviewed
   so code reviewers might focus on a single file that is index.js.
   */

/* Print examples:
   print('ABC');
   print('<strong>ABC</strong>');
   print('<strong>ABC</strong>', 'div');

   print('human; John; male; 2; 2; Hello world!; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny');
   print('human; <strong>John</strong>; male; 2; 2; <em>Hello world!</em>; Rex, Tom, Jenny', 'div');
   */
    print ('human; Joey; male; 2; 2; How you doin\'?; Phoebe, Alfa, Tima');
    print ('human; Phoebe; female; 2; 2; Smelly ca-a-a-a-at!; Joey, Alfa, Tima');
    print ('dog; Alfa; female; 0; 4; Bow-wow!; Joey, Phoebe, Tima');
    print('cat; Tima; male; 0; 4; Meow!; Halle, Joey, Phoebe, Alfa');
    print ('human; '+ catWoman.name + '; ' + catWoman.gender + '; ' + catWoman.hands + '; ' + catWoman.legs + '; ' + catWoman.say + '; '+ cat.name + ', ' + woman.name + ', '+ man.name + ', ' + dog.name);
