import {dispatch} from '../dispatcher';
import $ from 'jquery';
import setToString from '../../lib/settostring';

 export function executeSearch(value) {
   $.ajax({
     url: 'http://en.wikipedia.org/w/api.php',
     dataType: 'jsonp',
     data: {
       action: 'opensearch',
       format: 'json',
       search: encodeURI(value)
     }
   }).done((data, xhr, stuff) => {
     console.log(data[1]);
     dispatch(executeSearch, data[1]);
   });
 }

setToString('wiki', {
  executeSearch
});

