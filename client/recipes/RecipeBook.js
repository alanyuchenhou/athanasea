/**
 * Created by yuchen on 2/12/16.
 */

Template.RecipeBook.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('recipes');
    });
});

Template.RecipeBook.helpers({
    recipes: function () {
        return Recipes.find({});
    }
});

Template.RecipeBook.events({
    'click .new-recipe': function () {
        Session.set('newRecipe', true);
    }
});
