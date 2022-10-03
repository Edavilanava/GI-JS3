let exercise = (activity) =>  () =>  "\nToday's Activity: " + activity;

let speech = exercise('Public Speaking');
let run = exercise('Running');
let drawing = exercise('Drawing')

console.log(speech(),run(),drawing());