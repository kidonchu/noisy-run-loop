import Ember from 'ember';

export default Ember.Controller.extend({
	hi: 1,
	ho: 2,
	he: 3,

	doShow: false,

	baz: Ember.computed('hi', 'ho', 'he', function() {
		return this.get('hi') + this.get('ho') + this.get('he');
	}),

	actions: {
		doSomething() {
			this.toggleProperty('doShow');
		},
	}
});
