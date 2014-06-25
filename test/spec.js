var mocha = require('mocha');
var expect = require('chai').expect;
var uarel = require('../src/uarel');

describe('UAREL module', function() {
  'use strict';

  it('Should offer params append capabilities', function() {
    expect(uarel.appendParams('http://example.com/action', {
        param1: 'value1',
        param2: 2
    })).to.equal('http://example.com/action?param1=value1&param2=2');
  });

  it('Should offer the ability to retrieve parameters hash', function() {
    // Further investigation needs to be done for this
    // Should find a way to safely mock the window object without affecting the NodeJS workflow
  });
});
