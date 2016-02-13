/**
 * Created by yuchen on 2/12/16.
 */

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
