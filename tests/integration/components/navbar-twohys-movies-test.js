import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('navbar-twohys-movies', 'Integration | Component | navbar twohys movies', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{navbar-twohys-movies}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#navbar-twohys-movies}}
      template block text
    {{/navbar-twohys-movies}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
