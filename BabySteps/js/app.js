var StartupApp= Ember.Application.create();

/*StartupApp.IndexController= Ember.Controller.extend({
firstProp: "It is the first property",
secondProp: "It is the second property"
});
*/
// Our model


// Our Route

StartupApp.IndexRoute= Ember.Route.extend({
setupController: function(controller){
	controller.set('roommates',['Manoj','Vishal','Sunny','Vinay']);
}
});