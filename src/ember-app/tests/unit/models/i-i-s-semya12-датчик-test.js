import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-semya12-датчик', 'Unit | Model | i-i-s-semya12-датчик', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-semya12-датчик',
    'model:i-i-s-semya12-контроллер',
    'model:i-i-s-semya12-темпа-устан',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
