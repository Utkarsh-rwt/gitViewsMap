import mongoose from 'mongoose';

const visitorSchema = new mongoose.Schema({

    visitedGitHubUsername:{
        type:String,
        required:true
    },

    ip:{
        type:String,
        required:true,
    },
   
    latitude:{
        type: String,
        required:true,

    },
    longitude:{
        type: String,
        required:true,
    }

});

const Visitor = mongoose.model("Visitor" ,visitorSchema);
export default Visitor;
