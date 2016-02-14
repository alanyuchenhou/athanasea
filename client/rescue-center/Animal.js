/**
 * Created by yuchen on 2/12/16.
 */

Template.Animal.onCreated(function () {
    this.editMode = new ReactiveVar(false);
});

Template.Animal.helpers({
    editMode: function () {
        return Template.instance().editMode.get();
    }
});

Template.Animal.events({
    'click .toggle-menu': function () {
        Meteor.call('toggleMenuItem', this._id, this.inMenu);
    },
    'click .fa-trash': function () {
        Meteor.call('deleteAnimal', this._id);
    },
    'click .fa-pencil': function (event, template) {
        template.editMode.set(!template.editMode.get());
    }
});
