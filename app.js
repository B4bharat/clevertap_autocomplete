// the semi-colon before the function invocation is a safety 
// net against concatenated scripts and/or other plugins 
// that are not closed properly.
;(function($, window, document, undefined) {

//Dummy array of strings containing names of UFC Fighters
let ufcFighters = [
  'Conor McGregor',
  'Khabib Nurmagomedov',
  'Tony Ferguson',
  'Eddie Alvarez',
  'Nate Diaz',
  'Nick Diaz',
  'Michael Bisping',
  'Goerges St-Pierre',
  'Yoel Romero',
  'Robert Whittakar',
  'Gegard Mussasi',
  'Luke Rockhold',
  'Chris Weidman',
  'Jacare Souza',
  'Kelvin Gastelum',
  'Anderson Silva',
  'Daniel Cormier',
  'Jon Jones',
  'Alexender Gustaffson',
  'Jimmi Manuwa',
  'Stipe Miocic',
  'Junior Dos Santos',
  'Fabricio Werdum',
  'Cain Valazquez',
  'Mark Hunt'
];

/** OPTIONS
 *  .search-results > ul {
      max-height: 200px;
      border: 1px solid #999;
      margin: 0;
      padding: 0;
      background: #f5f5f5;
      list-style-type: none;
      overflow: auto;
    }

    .search-results > ul > li {
      padding: 10px 0;
      cursor: pointer;
    }

    .search-results > ul > li:hover {
      background: #b5afaf;
    }

    .highlight-searchterm {
      color: #3399ff;
    }
 */
function createResultArea(location) {
  $(location).after('<ul class="search-results"></ul>');
}

function getSearchResults(searchTerm) {
  return ufcFighters.filter(function(fighter) {
    return fighter.match(new RegExp(searchTerm, 'i'));
  });
}

function generateResultList(searchResults, searchTerm) {
  let resultList = '';
  searchResults.forEach(function(result) {
    function replacer(match) {
      return "<span class=\"highlight-searchterm\">"+match+"</span>";
    }
    result = result.replace(new RegExp(searchTerm, 'gi'), replacer);

    resultList += '<li>'+result+'</li>';
  });
  return resultList;
}

function showSearchResults(resultList) {
  $('.search-results').empty().append(resultList);
}

function showEmptyMessage() {
  $('.search-results').empty().text('No Fighter found');
}

function hideSearchResult() {
  $('.search-results').empty();
}

$.fn.autocomplete = function() {

  createResultArea(this);

  $(this).keyup(function() {
    let searchTerm = $(this).val();
    let searchResults = [];

    if(searchTerm) {
      searchResults = getSearchResults(searchTerm);
    }
    
    if(searchTerm && searchResults.length) {
      let resultList = generateResultList(searchResults, searchTerm);
      showSearchResults(resultList);
    } else if(searchTerm && !searchResults.length) {
      showEmptyMessage();
    } else {
      hideSearchResult();
    }

});

};
}(jQuery, window, document));