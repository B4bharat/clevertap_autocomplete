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

  let pluginName = 'autocomplete';
  let defaults = {
    maxHeight: 200,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#999',
    bgColor: '#f5f5f5',
    bgColorHover: '#b5afaf',
    highlightColor: '#3399ff',
    zIndex: 9999
  };

  function createResultArea(location, options) {

    $(location).after('<ul class="search-results"></ul>');
    $('.search-results').css({
      'max-height': options.maxHeight+'px',
      'border-width': options.borderWidth,
      'border-style': options.borderStyle,
      'border-color': options.borderColor,
      'background-color': options.bgColor,
      'z-index': options.zIndex
    });
    
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

  function Plugin( element, options ) {
    this.element = element;

    // jQuery has an extend method that merges the contents of two or more objects, storing the result in the first object.
    // The first object is generally empty because we don't want to alter the default options for future instances of the plugin
    this.options = $.extend( {}, defaults, options) ;
    
    this._defaults = defaults;
    this._name = pluginName;
    
    this.init();
  }

  Plugin.prototype.init = function () {
    // Place initialization logic here
    // You already have access to the DOM element and
    // the options via the instance, e.g. this.element 
    // and this.options
    createResultArea(this.element, this.options);
    
    $(this.element).keyup(function() {
      let searchTerm = this.value;
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

  // A really lightweight plugin wrapper around the constructor, 
  // preventing against multiple instantiations
  $.fn[pluginName] = function ( options ) {
    return this.each(function () {
      if (!$.data(this, 'plugin_' + pluginName)) {
        $.data(this, 'plugin_' + pluginName, 
        new Plugin( this, options ));
      }
    });
  };
  
}(jQuery, window, document));