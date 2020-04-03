const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes');
const command= process.argv[2];

yargs.command({
    command:'remove',
    describe:'Remove a note',
    handler: (argv)=>{
        console.log('Removing a Note!');
        notes.removeNotes(argv.title);
    }
})
yargs.command({
    command:'add',
    describe:'Add a note',
    builder:{
        title:{
            describe:'Note Ttile',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note Body',
            demandOption:true,
            type:'string'
        }
    },
    handler: (argv)=>{
        notes.addNotes(argv.title,argv.body);
        
    }
})
yargs.command({
    command:'list',
    describe:'List of note',
    handler: ()=>{
        console.log('Listing  Notes!')
    }
})


