(function($) {

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

$.fn.autocomplete = function() {

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
    $('.search-results ul').empty().append(resultList);
  }

  function showEmptyMessage() {
    $('.search-results ul').empty().text('No Fighter found');
  }

  function hideSearchResult() {
    $('.search-results ul').empty();
  }

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
})(jQuery);