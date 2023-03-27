function introduction(name) {
    return `Hi, my name is ${name}.`;
}
let name = 'Aki'

function introductionWithLanguage(name,language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;

}
let language ='Ember.js'

function introductionWithLanguageOptional(name = "Gracie",language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.` ;
}
