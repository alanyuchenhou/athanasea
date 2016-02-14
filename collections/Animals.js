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
    subspName: {
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

Animals.attachSchema(AnimalSchema);

Animals.helpers({
    spInfo: function () {
        var sp = Spp.findOne(this.spId);
        if (sp === null) {
            return null;
        }
        var targetSubspName = this.subspName;
        var targetSubsp = null;
        sp.subspp.forEach(function (subsp) {
            if (subsp.name === targetSubspName) {
                targetSubsp = subsp;
            }
        });
        if (targetSubsp === null) {
            return null;
        }
        return {
            spName: sp.name,
            subspPicture: targetSubsp.picture
        };
    }
});

Meteor.methods({
    deleteAnimal: function (id) {
        Animals.remove(id);
    },
    addAnimal: function (spId, subspObj) {
        //random pick
        var _n = Math.random();
        //linear normalize  xnorm = x-xmin/xmax-xmin
        for (var i = 0; i < subspObj.length - 1; i++) {
            subspObj[i + 1].possibility += subspObj[i].possibility;
        }
        for (i = 0; i < subspObj.length; i++) {
            if (_n <= subspObj[i].possibility / subspObj[subspObj.length - 1].possibility) {
                Animals.insert({spId: spId, subspName: subspObj[i].name});
                return;
            }
        }
    }
});
