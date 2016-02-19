
Template.Animal.onCreated(function () {
    this.editMode = new ReactiveVar(false);
});

Template.Animal.helpers({
    animalId: function () {
        return this._id;
    },
    editMode: function () {
        return Template.instance().editMode.get();
    }
});

Template.Animal.events({
    'click .toggle-menu': function () {
        Meteor.call('toggleMenuItem', this._id, this.inMenu);
    },
    'click .fa-trash': function () {
        Animals.remove(this._id);
    },
    'click .fa-pencil': function (event, template) {
        template.editMode.set(!template.editMode.get());
    }
});
