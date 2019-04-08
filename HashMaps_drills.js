const HashMap = require('./HashMap');

function main(){
    let lor = new HashMap;
    HashMap.MAX_LOAD_RATIO = 0.5;
    HashMap.SIZE_RATIO = 3;
    // const MAX_LOAD_RATIO = 0.5;
    // const SIZE_RATIO = 3;
    lor.set('Hobbit', 'Bilbo');
    lor.set('Hobbit', 'Frodo');
    lor.set('Wizard', 'Gandalf');
    lor.set('Human', 'Aragorn');
    lor.set('Elf', 'Legolas');
    lor.set('Maiar', 'The Necromancer');
    lor.set('Maiar', 'Sauron');
    lor.set('RingBearer', 'Gollum');
    lor.set('LadyOfLight', 'Galadriel');
    lor.set('HalfElven', 'Arwen');
    lor.set('Ent', 'Treebeard');
    console.log(lor);
    console.log(lor.get('Maiar'));
    console.log(lor.get('Hobbit'));

    // What are the values of Maiar and Hobbit that you have? Is there a discrepancy? Explain your answer.
    // Sauron and Frodo. No there is no discrepancy because with each call of the set method at the same key, the method
    // is just rewriting that value.

    // What is the capacity of your hash table after you have hashed all the above items? Explain your answer.
    // 24. Only one resize was required so we have a capacity of 8 * 3. And since we did not add over 50% of 24,
    // we didn't need to resize again. 


}

main();

const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1,10);
    map1.set(str2,20);
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);
    map2.set(str4,10);

    console.log(map1.get(str1));
    console.log(map2.get(str3));
}

WhatDoesThisDo();