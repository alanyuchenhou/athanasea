/**
 * Created by yuchen on 2/12/16.
 */

Template.Sea.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('spp');
    });
});

Template.Sea.helpers({
    getSpp: function () {
        return Spp.find({});
    }
});

Template.Sea.events({
    'click .new-recipe': function () {
        Session.set('newRecipe', true);
    }
});
