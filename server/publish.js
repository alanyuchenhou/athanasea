
Meteor.publish('recipes', function(){
    return Recipes.find({author: this.userId});
});

Meteor.publish('animals', function () {
    return Animals.find({owner: this.userId});
});

Meteor.publish('spp', function () {
    return Spp.find();
});

Meteor.publish('singleRecipe', function(id){
    check(id, String);
    return Recipes.find({_id: id});
});
