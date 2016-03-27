
Animals = new Mongo.Collection('Animals');

Animals.allow({
    insert: function (userId, doc) {
        return !!userId;
    },
    remove: function (userId, doc) {
        return !!userId;
    },
    update: function (userId, doc) {
        return !!userId;
    }
});

Animal = new SimpleSchema({
    name: {
        type: String
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
        autoValue: function () {
            return this.userId;
        },
        autoform: {
            type: 'hidden'
        }
    },
    createDate: {
        type: Date,
        autoValue: function () {
            return new Date();
        },
        autoform: {
            type: 'hidden'
        }
    }
});

Animals.attachSchema(Animal);

Animals.helpers({
    Info: function () {
        var sp = Spp.findOne(this.spId);
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
        var currentAge = moment(new Date()).diff(moment(this.createDate), 'days');
        var picture = null;
        if (currentAge < targetSubsp.matureAge) {
            picture = sp.picture;
        } else {
            picture = targetSubsp.picture;
        }
        return {
            spName: sp.name,
            age: currentAge,
            picture: picture
        };
    }
});
