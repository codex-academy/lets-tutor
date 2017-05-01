const assert = require('assert');
const Models = require( '../models');
describe('models should be able to', function(){

    var models = Models("mongodb://localhost/tutors-tests");

    beforeEach(function(done){
        models.Subject.remove({}, function(err){
            done(err);
        })
    })

    it('store Subjects to MongoDB', function(done){

        var subjectData = { name : 'The test subject'};
        models.Subject
            .create(subjectData, function(err){

                models.Subject.find({ name : 'The test subject'}, function(err, subjects){
                    assert.equal(1, subjects.length);
                    done(err);
                });

            });

        //assert.equal(1,2);
    });

    it('should not allow duplicate Subjects', function(done){
        var subjectData = { name : 'The test subject'};
        models.Subject
            .create(subjectData, function(err){
                var subjectData = { name : 'The test subject'};
                models.Subject
                    .create(subjectData, function(err){
                        assert.ok(err, 'Should give an error for duplicate Subjects');
                        done();
                    });
            });
    });
})
