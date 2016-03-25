
Spp = new Mongo.Collection('spp');

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
        type: String
    },
    description: {
        type: String
    },
    lifespan: {
        type: Number
    },
    subspp: {
        type: [Subsp]
    },
    author: {
        type: String,
        autoValue: function () {
            return this.userId;
        },
        autoform: {
            type: 'hidden'
        }
    },
    appearDate: {
        type: Date
    },
    disappearDate: {
        type: Date
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

Spp.attachSchema(Sp);

Spp.after.remove(function (userId, doc) {
    Animals.remove({spId: doc._id});
});
