import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('run-loop-test', 'Integration | Component | run loop test', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{run-loop-test}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#run-loop-test}}
      template block text
    {{/run-loop-test}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
