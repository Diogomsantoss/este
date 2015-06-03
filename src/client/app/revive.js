import {Map} from 'immutable';

export default function(value) {
  return Map()
    .set('list', value.get('list'));
}

