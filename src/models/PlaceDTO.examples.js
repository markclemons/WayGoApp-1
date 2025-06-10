/**
 * PlaceDTO Usage Examples
 * This file demonstrates how to use the PlaceDTO class with Google Places API data
 */

const PlaceDTO = require('./PlaceDTO');

// Example usage with the Chick-fil-A data provided
const chickFilAData = {
  "place_id": "ChIJtb2UZgQzjoARpbGkf0wypoY",
  "name": "Chick-fil-A",
  "formatted_address": "1162 Blossom Hill Rd, San Jose, CA 95118, USA",
  "formatted_phone_number": "(408) 978-7705",
  "international_phone_number": "+1 408-978-7705",
  "website": "https://www.chick-fil-a.com/locations/ca/blossom-hill-almaden-expy?utm_source=yext&utm_medium=link",
  "business_status": "OPERATIONAL",
  "rating": 4.5,
  "user_ratings_total": 1630,
  "price_level": 1,
  "vicinity": "1162 Blossom Hill Road, San Jose",
  "geometry": {
    "location": {
      "lat": 37.24999539999999,
      "lng": -121.8777324
    },
    "viewport": {
      "northeast": {
        "lat": 37.25140623029149,
        "lng": -121.8764680697085
      },
      "southwest": {
        "lat": 37.24870826970849,
        "lng": -121.8791660302915
      }
    }
  },
  "current_opening_hours": {
    "open_now": true,
    "weekday_text": [
      "Monday: 6:30 AM – 11:00 PM",
      "Tuesday: 6:30 AM – 11:00 PM",
      "Wednesday: 6:30 AM – 11:00 PM",
      "Thursday: 6:30 AM – 11:00 PM",
      "Friday: 6:30 AM – 11:00 PM",
      "Saturday: 6:30 AM – 11:00 PM",
      "Sunday: Closed"
    ]
  },
  "delivery": true,
  "dine_in": true,
  "takeout": true,
  "serves_breakfast": true,
  "serves_lunch": true,
  "serves_dinner": true,
  "types": [
    "restaurant",
    "food",
    "point_of_interest",
    "establishment"
  ]
};

/**
 * Example 1: Creating PlaceDTO from JSON
 */
function exampleFromJson() {
  console.log('=== Example 1: Creating PlaceDTO from JSON ===');
  
  const place = PlaceDTO.fromJson(chickFilAData);
  
  console.log('Place Name:', place.name);
  console.log('Address:', place.formattedAddress);
  console.log('Rating:', place.rating);
  console.log('Currently Open:', place.isCurrentlyOpen());
  console.log('Valid Place:', place.isValid());
  console.log('');
}

/**
 * Example 2: Converting PlaceDTO back to JSON
 */
function exampleToJson() {
  console.log('=== Example 2: Converting PlaceDTO back to JSON ===');
  
  const place = PlaceDTO.fromJson(chickFilAData);
  const jsonOutput = place.toJson();
  
  console.log('JSON Output Keys:', Object.keys(jsonOutput));
  console.log('Place ID from JSON:', jsonOutput.place_id);
  console.log('Name from JSON:', jsonOutput.name);
  console.log('');
}

/**
 * Example 3: Getting simplified place data
 */
function exampleSimplified() {
  console.log('=== Example 3: Getting simplified place data ===');
  
  const place = PlaceDTO.fromJson(chickFilAData);
  const simplified = place.getSimplified();
  
  console.log('Simplified Place Data:');
  console.log(JSON.stringify(simplified, null, 2));
  console.log('');
}

/**
 * Example 4: Working with address components
 */
function exampleAddressComponents() {
  console.log('=== Example 4: Working with address components ===');
  
  // Add some address components to demonstrate
  const dataWithAddressComponents = {
    ...chickFilAData,
    address_components: [
      {
        "long_name": "1162",
        "short_name": "1162",
        "types": ["street_number"]
      },
      {
        "long_name": "Blossom Hill Road",
        "short_name": "Blossom Hill Rd",
        "types": ["route"]
      },
      {
        "long_name": "San Jose",
        "short_name": "San Jose",
        "types": ["locality", "political"]
      },
      {
        "long_name": "California",
        "short_name": "CA",
        "types": ["administrative_area_level_1", "political"]
      },
      {
        "long_name": "United States",
        "short_name": "US",
        "types": ["country", "political"]
      }
    ]
  };
  
  const place = PlaceDTO.fromJson(dataWithAddressComponents);
  
  console.log('Street Number:', place.getAddressComponent('street_number'));
  console.log('City:', place.getAddressComponent('locality'));
  console.log('State:', place.getAddressComponent('administrative_area_level_1'));
  console.log('Country:', place.getAddressComponent('country'));
  console.log('');
}

/**
 * Example 5: Working with opening hours
 */
function exampleOpeningHours() {
  console.log('=== Example 5: Working with opening hours ===');
  
  const place = PlaceDTO.fromJson(chickFilAData);
  const hours = place.getFormattedHours();
  
  console.log('Opening Hours:');
  hours.forEach(hour => console.log(' ', hour));
  console.log('');
}

/**
 * Example 6: Creating a new PlaceDTO manually
 */
function exampleManualCreation() {
  console.log('=== Example 6: Creating a new PlaceDTO manually ===');
  
  const place = new PlaceDTO();
  place.placeId = 'custom_place_id';
  place.name = 'Custom Restaurant';
  place.formattedAddress = '123 Main St, San Jose, CA';
  place.rating = 4.2;
  place.geometry.location.lat = 37.3387;
  place.geometry.location.lng = -121.8853;
  
  console.log('Manual Place:', place.getSimplified());
  console.log('Is Valid:', place.isValid());
  console.log('');
}

/**
 * Example 7: Error handling and validation
 */
function exampleErrorHandling() {
  console.log('=== Example 7: Error handling and validation ===');
  
  // Example with incomplete data
  const incompleteData = {
    name: 'Test Place'
    // Missing place_id
  };
  
  const place = PlaceDTO.fromJson(incompleteData);
  console.log('Place with incomplete data is valid:', place.isValid());
  
  // Example with null data
  const emptyPlace = PlaceDTO.fromJson({});
  console.log('Empty place is valid:', emptyPlace.isValid());
  console.log('');
}

// Run all examples
if (require.main === module) {
  console.log('PlaceDTO Usage Examples\n');
  
  exampleFromJson();
  exampleToJson();
  exampleSimplified();
  exampleAddressComponents();
  exampleOpeningHours();
  exampleManualCreation();
  exampleErrorHandling();
  
  console.log('All examples completed!');
}

module.exports = {
  exampleFromJson,
  exampleToJson,
  exampleSimplified,
  exampleAddressComponents,
  exampleOpeningHours,
  exampleManualCreation,
  exampleErrorHandling
};
