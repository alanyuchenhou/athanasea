
Template.Sp.onCreated(function () {
    this.editMode = new ReactiveVar(false);
});

Template.Sp.helpers({
    updateSpId: function () {
        return this._id;
    },
    editMode: function () {
        return Template.instance().editMode.get();
    }
});

Template.Sp.events({
    'click .toggle-menu': function () {
        Meteor.call('toggleMenuItem', this._id, this.inMenu);
    },
    'click .fa-ambulance': function () {
        //random pick
        var subspObj = this.subspp;
        var _n = Math.random();
        //linear normalize  xnorm = x-xmin/xmax-xmin
        for (var i = 0; i < subspObj.length - 1; i++) {
            subspObj[i + 1].possibility += subspObj[i].possibility;
        }
        for (i = 0; i < subspObj.length; i++) {
            if (_n <= subspObj[i].possibility / subspObj[subspObj.length - 1].possibility) {
                Animals.insert({name: 'Give me a name!', spId: this._id, subspName: subspObj[i].name});
                return;
            }
        }
    },
    'click .fa-pencil': function (event, template) {
        template.editMode.set(!template.editMode.get());
    }
});
