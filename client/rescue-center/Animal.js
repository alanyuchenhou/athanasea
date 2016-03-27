
Template.Animal.onCreated(function () {
    this.editMode = new ReactiveVar(false);
});

Template.Animal.helpers({
    inEditMode: function () {
        return Template.instance().editMode.get();
    }
});

Template.Animal.events({
    'click .fa-trash': function () {
        Animals.remove(this._id);
    },
    'click .fa-pencil': function (event, template) {
        template.editMode.set(!template.editMode.get());
    }
});
