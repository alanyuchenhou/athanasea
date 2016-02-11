FlowRouter.route('/rescue', {
  name: "home",
  action: function(params, queryParams) {
    BlazeLayout.render("layout", {main: "rescue"});
  }
});
if(Meteor.isClient) {
  Template.rescue.helpers({
    'wiki_url':function(){
       return Session.get('wiki_url')?Session.get('wiki_url'):"about:blank";
  }
  });
  Template.rescue.events({
    'click #turtle': function () {
      Session.set('wiki_url',"https://en.wikipedia.org/wiki/Turtle");
      Meteor.setTimeout( function(){$('.turtle_dialog').show()},1000);

    },
    'click #salmon': function () {
      Session.set('wiki_url',"https://en.wikipedia.org/wiki/salmon");
      Meteor.setTimeout( function(){$('.turtle_dialog').show()},1000);
    },
    'click #clownfish': function () {
      Session.set('wiki_url',"https://en.wikipedia.org/wiki/clownfish");
      Meteor.setTimeout( function(){$('.turtle_dialog').show()},1000);
    },
    'click #cancel':function(){
      $('.turtle_dialog').hide();
    },
    'click #adopt':function(){
      FlowRouter.go('/adopt');
    }
  });
}
