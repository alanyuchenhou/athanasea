FlowRouter.route('/', {//① 当路径是localhost:3000/ 时
  name: "home",
  action: function(params, queryParams) {
    //以下这个方法 告诉layout.html中的main section 渲染 athanasea_trunk(定义在home.html)这个模板
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
    "click .resuce": function () { //当点击class名为rescue的button时
      FlowRouter.go('/rescue'); // 去往路径localhost:3000/rescue
    }
  });
}
