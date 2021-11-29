const{ MongoClient} = require("mongodb")

const Client = new MongoClient ("mongodb+srv://Sarvesh39:Waransarvesh39@cluster0.0nwuc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

Client.connect().then((mClinet) => {
    const db = mClinet.db();

    db.collection ("contact details").insertOne({
        name :"SARVESHWARAN",
        phone:"7397442765",
        email:"waransarvesh39@gmail.com",
        
        "portfolio": "https://Sarvesh-63.github.io", 
    }).then( () =>{
        console.log("contact details were added");
        process.exit(0);
    });
});
