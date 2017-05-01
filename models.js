const mongoose = require('mongoose');
module.exports = function(mongoUrl){
    mongoose.connect(mongoUrl);

    const SubjectSchema = mongoose.Schema({name : String});
    SubjectSchema.index({name : 1}, {unique : true});

    const Subject = mongoose.model('Subject', SubjectSchema);

    return {
        Subject
    };

}
