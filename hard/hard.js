
function generatePII(){
    let pii = {
    name : "Eduardo Davila",
    ssn: '000-00-0000'
    }

    function getName(){
    return pii.name;
    }
    
    return getName();
}

console.log(generatePII());