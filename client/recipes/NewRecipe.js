/**
 * Created by yuchen on 2/12/16.
 */

Template.NewRecipe.events({
    'click .fa-close': function () {
        Session.set('newRecipe', false);
    }
});