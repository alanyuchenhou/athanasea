
Template.Sea.onCreated(function () {
    var self = this;
    self.autorun(function () {
        self.subscribe('spp');
    });
});

Template.Sea.helpers({
    getSpp: function () {
        return Spp.find({});
    }
});
