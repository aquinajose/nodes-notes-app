const fs = require('fs');
const getNotes = () => {
    return ("Your notes...");
}

const addNotes = (title, body) => {
    let notes = loadNotes();

    const duplicateNotes = notes.filter(note => {
        return note.title === title
    });
    debugger;
    if (duplicateNotes.length === 0) {
        notes = [...notes, { title: title, body: body }]
        console.log('New note added');
        saveNotes(notes);
    }
    else {
        console.log('Note title taken!');
    }
}
const removeNotes =(title)=>{
    let notes=loadNotes();
    const notesToKeep= notes.filter(note=>{
        return note.title!==title
    });
    saveNotes(notesToKeep);
}
const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch (err) {
        return []
    }
}
const saveNotes = (notes) => {
    fs.writeFileSync('notes.json', JSON.stringify(notes))
}
module.exports = {
    getNotes,
    addNotes,
    removeNotes
};