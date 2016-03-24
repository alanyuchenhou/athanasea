
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
        type: String,
        label: "Name"
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

Animals.attachSchema(Animal);

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
