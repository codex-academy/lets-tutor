module.exports = function(models){

    const subjectList = [];

    const index = function(req, res, next){

        models.Subject.find({}, function(err, subjects){
            if (err){
                return next(err);
            }
            res.render('subjects/index', {subjects});
        });

    };

    const addScreen = function(req, res){
        res.render('subjects/add');
    }

    const add = function(req, res, next){
        //res.send('Add a subject');

        var subject = {
            name : req.body.subject
        };

        if (!subject || !subject.name){
            req.flash('error', 'Subject should not be blank')
        }
        else{
            models.Subject.create(subject, function(err, results){
                if (err){
                    return next(err);
                }
                req.flash('success', 'Subject added!');
                res.redirect('/subjects');

            });

        }

    }

    return {
        index,
        add,
        addScreen
    }

}
