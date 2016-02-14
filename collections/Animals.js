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
    addAnimal: function (spId, subSpName) {
        Animals.insert({spId: spId, subSpName: subSpName});
    }
});

Animals.attachSchema(AnimalSchema);
