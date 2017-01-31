import Ember from 'ember';

export default Ember.Component.extend({
	foo: false,
	doShow: false,
	actions: {
		doSomething() {

			// Ember.run.scheduleOnce('afterRender', () => {

			// 	Ember.debug('In afterRender');

			// });

			// Ember.run.later(() => {

			// 	Ember.debug('In later');

			// 	Ember.run.scheduleOnce('afterRender', this, () => {

			// 		Ember.debug('In first afterRender');

			// 		Ember.run.scheduleOnce('afterRender', this, () => {

			// 			Ember.debug('In second afterRender');

			// 		});

			// 	});
			// });

			// this.toggleProperty('foo');
			// Ember.run(function () {
			// 	Ember.debug('In my own runloop');
			// 	Ember.$('body').css('background-color', 'pink');
			// 	Ember.run(function () {
			// 		Ember.debug('In a nested runloop');
			// 		Ember.$('body').css('background-color', 'red');
			// 	});
			// });
			// Ember.run(function () {
			// 	Ember.debug('In another of my own runloops');
			// 	Ember.$('body').css('background-color', 'yellow');
			// });
		}
	}
});
