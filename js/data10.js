

const fs = require("fs" )

const addperson = ( id , fname , lname , age , city) =>{

    const allData = loadData();

    const duplicatedData = allData.filter((obj)=>{
        return obj.id === id
    })
    if(duplicatedData.length == 0){
    allData.push({ 
    id:id , 
    fname: fname , 
    lname :lname , 
    age:age , 
    city:city
     });

     saveAllData(allData);
    }else{
        console.log("ERROR ID")
    }
}


const loadData = () => {
     
    try{
        const DataJson = fs.readFileSync("data10.json").toString();
    return  JSON.parse(DataJson);
    }
    catch{
    return []
    }
}

const  saveAllData=(allData)=>{
    const AllDataJson = JSON.stringify(allData);

    fs.writeFileSync("data10.json" , AllDataJson);


}

const deleteData = (id) => {
    const allData = loadData();
     const dataToKeep = allData.filter((obj)=> {
        return obj.id !==id ;
     })
     saveAllData(dataToKeep)
     console.log("deleted ITEM")

}


const readData = (id) =>{
    const allData = loadData();
    const itemNeeded = allData.find((obj)=>{
        return obj.id == id ;
    }) 
    if(itemNeeded){
        console.log(itemNeeded.fname)
    }else{
        console.log("no such ID in the database");
    }

}


const listData = () =>{
    const allData = loadData();

   allData.forEach((obj) =>{
    console.log(obj.fname , obj.age , obj.city)
   })
}


module.exports={addperson , deleteData , readData , listData};
