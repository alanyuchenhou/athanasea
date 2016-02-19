
Template.Menu.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('recipes');
    });
});

Template.Menu.helpers({
    recipes: function () {
        return Recipes.find({inMenu: true});
    }
});
