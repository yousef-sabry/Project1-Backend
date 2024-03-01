

const data10 = require("./data10")
const yargs = require("yargs");
yargs.command({
    command:"add",
    describe:"add an item",
    builder:{
        fname:{
            describe: "this is first name ",
            demandOption: true,
            type : "string"

        },
        lname:{
            describe: "this is last name ",
            demandOption: true,
            type : "string"

        }
    },
    handler:(x)=>{
    
    data10.addperson( x.id , x.fname , x.lname , x.age , x.city );

    }
})

yargs.command({
    command:"delete",
    describe:"delete an item",
    
    handler:(x)=>{
    data10.deleteData(x.id)
    }
})

yargs.command({
    command:"read",
    describe:"Read Data",
    builder :{
        id :{
            describe:"this id   will be used to read the data",
            demandOption : true,
            type : "string"
        }
    }, 
    handler:(x)=>{
    data10.readData(x.id);
    console.log("\n");
    }
})

yargs.command({
    command:"list",
    describe:"list Data", 
    handler:(x)=>{
    data10.listData();
    console.log("\n");
    }
})


yargs.parse();