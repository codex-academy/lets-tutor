module.exports = function(){

    const subjectList = [];

    const index = function(req, res){
        res.render('subjects/index', {subjects : subjectList});
    };

    const add = function(req, res){
        //res.send('Add a subject');

        var subject = req.params.subject;

        var foundSubject = subjectList.find(function(currentSubject){
            return currentSubject === subject;
        });

        if (subject && !foundSubject){
            subjectList.push(subject);
        }

        res.redirect('/subjects');
    }

    return {
        index,
        add
    }

}
