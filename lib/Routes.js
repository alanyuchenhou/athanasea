
if (Meteor.isClient) {
    Accounts.onLogin(function () {
        FlowRouter.go('rescue-center');
    });

    Accounts.onLogout(function () {
        FlowRouter.go('home');
    });
}


FlowRouter.triggers.enter([function (context, redirect) {
    if (!Meteor.userId()) {
        FlowRouter.go('home');
    }
}]);

FlowRouter.route('/', {
    name: 'home',
    action: function () {
        if (Meteor.userId()) {
            FlowRouter.go('rescue-center');
        }
        GAnalytics.pageview();
        BlazeLayout.render('HomeLayout');
    }
});

FlowRouter.route('/sea', {
    name: 'sea',
    action: function () {
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout', {main: 'Sea'});
    }
});

FlowRouter.route('/rescue-center', {
    name: 'rescue-center',
    action: function () {
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout', {main: 'RescueCenter'});
    }
});

FlowRouter.route('/recipe-book', {
    name: 'recipe-book',
    action: function () {
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout', {main: 'RecipeBook'});
    }
});

FlowRouter.route('/recipe/:id', {
    name: 'recipe',
    action: function () {
        GAnalytics.pageview();
        BlazeLayout.render('MainLayout', {main: 'RecipeSingle'});
    }
});

FlowRouter.route('/menu', {
    name: 'menu',
    action: function () {
        BlazeLayout.render('MainLayout', {main: 'Menu'});
    }
});

FlowRouter.route('/shopping-list', {
    name: 'shopping-list',
    action: function () {
        BlazeLayout.render('MainLayout', {main: 'ShoppingList'});
    }
});
