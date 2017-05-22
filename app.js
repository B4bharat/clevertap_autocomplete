/**
 * 3. on keypress, call a function that:
 *    3.2 attaches the result to the DOM
 * 4. DOM for listing the results
 */
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

$('#search-box').keyup(function() {
  let searchTerm = $(this).val();
  if(searchTerm) {
    let searchResults = getSearchResults(searchTerm);
  }
});