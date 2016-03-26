
Spp = new Mongo.Collection('spp');

Subsp = new SimpleSchema({
    name: {
        type: String
    },
    picture: {
        type: String
    },
    description: {
        type: String
    },
    matureAge: {
        type: Number
    },
    possibility: {
        type: Number,
        decimal: true,
        max: 1
    }
});

Sp = new SimpleSchema({
    name: {
        type: String
    },
    picture: {
        type: String
    },
    description: {
        type: String
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
