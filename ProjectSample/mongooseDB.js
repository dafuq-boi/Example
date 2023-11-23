const mongoose = require('mongoose');

exports.connect = async () => {
    try{
        const URL = 'mongodb://ac-buwtvqp-shard-00-00.w8d8uyb.mongodb.net:27017/?authSource=admin&compressors=none&replicaSet=atlas-148yfn-shard-0&ssl=true';
        if (!URL) {
            throw new Error("Empty mongoDB Url");
        }

        // const db = await mongoose.connect(URL, {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        //     // useFindAndModify: false,
        //     // useCreateIndex: true
        // });
        const db = await mongoose.connect(URL);

        // console.log(db)

        console.log(`MongoDB connected : ${db}`);
    } catch(err) {
        console.error(err);
        process.exit(1);
    }
}

// module.exports = exports = connect;
