/**
 * Created by yuchen on 2/12/16.
 */
Animals = new Mongo.Collection('Animals');

Animals.allow({
    insert: function (userId, doc) {
        return !!userId;
    },
    update: function (userId, doc) {
        return !!userId;
    }
});

AnimalSchema = new SimpleSchema({
    name: {
        type: String,
        label: "Name",
        autoValue: function () {
            return 'Give me a name!';
        }
    },
    description: {
        type: String,
        label: "Description",
        autoValue: function () {
            return 'Give me some description!';
        }
    },
    spId: {
        type: String,
        autoform: {
            type: 'hidden'
        }
    },
    subSpName: {
        type: String,
        autoform: {
            type: 'hidden'
        }
    },
    owner: {
        type: String,
        label: "Owner",
        autoValue: function () {
            return this.userId;
        },
        autoform: {
            type: 'hidden'
        }
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function () {
            return new Date();
        },
        autoform: {
            type: 'hidden'
        }
    }
});

Meteor.methods({
    deleteAnimal: function (id) {
        Animals.remove(id);
    },
    addAnimal: function (spId, subSpObj) {
        //random pick
        var _n = Math.random();
        //linear normalize  xnorm = x-xmin/xmax-xmin
        for(var i = 0 ; i < subSpObj.length-1; i++){
            subSpObj[i+1].possibility += subSpObj[i].possibility;
        }
        for(i = 0 ; i < subSpObj.length; i++){
         if ( _n <= subSpObj[i].possibility/subSpObj[subSpObj.length-1].possibility){
             Animals.insert({spId: spId, subSpName: subSpObj[i].name});
             return;
         }
        }
    }
});

Animals.attachSchema(AnimalSchema);
