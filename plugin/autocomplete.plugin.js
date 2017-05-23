// the semi-colon before the function invocation is a safety 
// net against concatenated scripts and/or other plugins 
// that are not closed properly.
;(function($, window, document, undefined) {

  let pluginName = 'autocomplete';
  let defaults = {
    maxHeight: 200,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#999',
    bgColor: '#f5f5f5',
    zIndex: 9999
  };

  function createResultArea(location, options) {

    $(location).after('<ul class="search-results"></ul>');

    //Styling the search result area
    $('.search-results').css({
      'max-height': options.maxHeight+'px',
      'border-width': options.borderWidth,
      'border-style': options.borderStyle,
      'border-color': options.borderColor,
      'background-color': options.bgColor,
      'z-index': options.zIndex
    });

  }

  function getSearchResults(lookupArray, searchTerm) {
    return lookupArray.filter(function(instance) {
      return instance.match(new RegExp(searchTerm, 'i'));
    });
  }

  function getSearchResultsForObjectArr(lookupArray, lookupProperty, searchTerm) {
    return lookupArray.filter(function(instance) {
      return instance[lookupProperty].match(new RegExp(searchTerm, 'i'));
    })
    .map(function(instance) {
      return instance[lookupProperty];
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
    let options = this.options;
    
    $(this.element).keyup(function() {

      if(this.value) {
        let searchTerm = this.value;
        let searchResults = [];

        if(options.lookupProperty) {
          searchResults = getSearchResultsForObjectArr(options.lookup, options.lookupProperty, searchTerm);
        } else {
          searchResults = getSearchResults(options.lookup, searchTerm);
        }

        if(searchResults.length) {
          let resultList = generateResultList(searchResults, searchTerm);
          showSearchResults(resultList);
        } else {
          showEmptyMessage();
        }
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