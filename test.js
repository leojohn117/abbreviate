/*
 * Test th String conversion
 */

'use strict';
const assert = require('assert');
const abbreviate = require('./abbreviate');

describe('abbreviate', function() {
  it('should convert string to abbreviate', function() {
  	assert.equal(abbreviate('internationalization'), 'i18n');
  	assert.equal(abbreviate('accessibility'), 'a11y');
  	assert.equal(abbreviate('handed'), 'h4d');
  	assert.equal(abbreviate('left-handed'), 'l2t-h4d');
    assert.equal(abbreviate('deep-fried mars bars are yummy!'), 'd2p-f3d m2s b2s are y3y!');
  });
});