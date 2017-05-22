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

function getSearchResults(searchTerm) {
  return ufcFighters.filter(function(fighter) {
    return fighter.match(new RegExp(searchTerm, 'i'));
  });
}

function showSearchResults(resultList) {
  $('.search-results ul').empty().append(resultList);
}

function generateResultList(searchResults) {
  let resultList = '';
  searchResults.forEach(function(result) {
    resultList += '<li>'+result+'</li>';
  });
  return resultList;
}

function showEmptyMessage() {
  $('.search-results ul').empty().text('No Fighter found');
}

function hideSearchResult() {
  $('.search-results ul').empty();
}

$('#search-box').keyup(function() {
  let searchTerm = $(this).val();
  let searchResults = [];

  if(searchTerm) {
    searchResults = getSearchResults(searchTerm);
  }
  console.log(searchResults);
  if(searchTerm && searchResults.length) {
    let resultList = generateResultList(searchResults);
    showSearchResults(resultList);
  } else if(searchTerm && !searchResults.length) {
    showEmptyMessage();
  } else {
    hideSearchResult();
  }

});