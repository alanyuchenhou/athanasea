
Template.RescueCenter.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('animals');
        self.subscribe('spp');
    });
});

Template.RescueCenter.helpers({
    getAnimals: function () {
        return Animals.find();
    }
});
