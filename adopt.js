FlowRouter.route('/adopt', {
  name: "adopt",
  action: function(params, queryParams) {
    BlazeLayout.render("layout", {main: "adopt"});
  }
});
