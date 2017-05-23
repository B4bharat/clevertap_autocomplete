$(document).ready(function() {
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

  /**
   * optionally you can add this array of objects and supply a 'lookupProperty' property with value-'name' to autocomplete method
   * let ufcFighters = [
      {
        name: 'Conor McGregor',
        age: 28
      },
      {
        name: 'Khabib Nurmagomedov',
        age: 28
      },
      {
        name: 'Tony Ferguson',
        age: 28
      },
      {
        name: 'Eddie Alvarez',
        age: 28
      },
      {
        name: 'Nate Diaz',
        age: 28
      },
      {
        name: 'Nick Diaz',
        age: 28
      }
    ];
   */

  $('#search-box').autocomplete({
    lookup: ufcFighters
  });
});