FlowRouter.route('/', {
  name: "home",
  action: function(params, queryParams) {
    BlazeLayout.render("layout", {main: "athanasea_trunk"});
  }
});
if (Meteor.isClient) {
  Template.athanasea_trunk.onRendered(function () {
    Session.set('is_trunk', true);
    $(".submit").hide();
    $(".search").hide();
  });
  Template.athanasea_trunk.events({
    "click .resuce": function () {
      FlowRouter.go('/rescue');
    }
  });
}
