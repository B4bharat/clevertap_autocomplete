# clevertap_autocomplete
A basic jquery autocomplete plugin

# API

  - $(selector).autocomplete(options);
  - Sets up autocomplete for input field(s).
  - options: object literal which helps in configuring the plugin. All the configurable properties are listed below
 
# Configurable properties [options]

- lookup: The array values against which the search needs to be performed. The array can be of any of these two types:
    - String Array: ['Conor McGregor', 'Tony Ferguson', 'TJ Dillashaw']
    - Array of Objects: [{name: 'Conor McGregor', age: 28}, {name: 'Tony Ferguson', age: 34}]
- lookupProperty: When an 'array of objects' is passed as the lookup, one needs to specify the property that needs to be searched into. The property's value should be a string
- maxHeight: (type-number) The maximum height of the search result area. Default: 200
- borderWidth: (type-number) The width of the border of the search result area. Default: 1
- borderStyle: (type-string) The style of the border of the search result area. Default: 'solid'
- borderColor: (type-string) The hex value of the border color. Default: '#999'
- bgColor: (type-string) The background color of the search result area. Default: '#f5f5f5'
