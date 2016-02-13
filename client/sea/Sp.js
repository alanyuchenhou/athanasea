/**
 * Created by yuchen on 2/12/16.
 */

Template.Sp.onCreated(function () {
    this.editMode = new ReactiveVar(false);
});

Template.Sp.helpers({
    updateSpId: function () {
        return this._id;
    },
    editMode: function () {
        return Template.instance().editMode.get();
    }
});

Template.Sp.events({
    'click .toggle-menu': function () {
        Meteor.call('toggleMenuItem', this._id, this.inMenu);
    },
    'click .fa-trash': function () {
        Meteor.call('deleteSp', this._id);
    },
    'click .fa-pencil': function (event, template) {
        template.editMode.set(!template.editMode.get());
    }
});
