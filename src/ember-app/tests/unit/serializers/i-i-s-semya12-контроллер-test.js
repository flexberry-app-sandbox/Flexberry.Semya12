import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-semya12-контроллер', 'Unit | Serializer | i-i-s-semya12-контроллер', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-semya12-контроллер',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-semya12-датчик',
    'model:i-i-s-semya12-контроллер',
    'model:i-i-s-semya12-темпа-устан',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
