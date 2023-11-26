'use strict';

const no_candidates = +prompt('How many candidates?');
const candidate_list = [];
for (let i = 1; i <= no_candidates; i++) {
    let candidate = prompt(`Give the name of the ${i}. candidate:`);
    let candidate_obj = {
        name: candidate,
        votes: 0,
    }
    candidate_list.push(candidate_obj);
}
const voters = +prompt('How many voters?');
for (let i = 1; i <= voters; i++) {
    let vote = prompt(`${i}. voter, enter the name of the candidate you're gonna vote for or press enter to abstain:`);
    for (let person of candidate_list) {
        if (person.name === vote) {
            person.votes += 1;
        }
    }
}
candidate_list.sort((a, b) => b.votes - a.votes);
console.log(`The winner is ${candidate_list[0].name} with ${candidate_list[0].votes} votes.`)
console.log('Results:')
for (let i = 0; i < candidate_list.length; i++) {
    console.log(`${candidate_list[i].name}: ${candidate_list[i].votes} votes`)
}
