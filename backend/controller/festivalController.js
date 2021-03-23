const festival = require("../model/festivalModel")

async function createFestival(){
    try{
        await festival.createFestival()
    }catch(error){
        throw error
    }
}

module.exports = {createFestival}