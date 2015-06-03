import {dispatch} from '../dispatcher';
import $ from 'jquery';
import setToString from '../../lib/settostring';

export function executeSearch(value) {
   $.ajax({
     method: 'POST',
     url: 'http://www.freecodecamp.com/stories/search',
     data: {
       data: {
         searchValue: value
       }
     }
   }).done((data, xhr, stuff) => {
     console.log(data[1]);
     dispatch(executeSearch, data);
   });
 }

setToString('wiki', {
  executeSearch
});

