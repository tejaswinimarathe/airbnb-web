const mongoose=require('mongoose');
const initData=require('./data.js');
const Listing=require('../models/listing.js');

main().then(res=console.log('connect to db')).catch(err=>console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

const initDb= async ()=>{
  await Listing.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj,owner:"66f54771fa5bd296f5071e5c"}));
 await Listing.insertMany(initData.data);
 console.log('data was initialized');
}

initDb();