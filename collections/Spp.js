
Spp = new Mongo.Collection('spp');

Spp.allow({
    insert: function (userId, doc) {
        return !!userId;
    },
    update: function (userId, doc) {
        return !!userId;
    }
});

Subsp = new SimpleSchema({
    name: {
        type: String
    },
    possibility: {
        type: Number,
        decimal: true,
        max: 1
    },
    picture: {
        type: String
    }
});

Sp = new SimpleSchema({
    name: {
        type: String,
        label: "Name"
    },
    description: {
        type: String,
        label: "Description"
    },
    lifespan: {
        type: Number,
        label: "Lifespan"
    },
    subspp: {
        type: [Subsp],
        label: "Subspecies"
    },
    author: {
        type: String,
        label: "Author",
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

Spp.attachSchema(Sp);

Spp.after.remove(function (userId, doc) {
    Animals.remove({spId: doc._id});
});
