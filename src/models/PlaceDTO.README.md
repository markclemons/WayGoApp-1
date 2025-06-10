# PlaceDTO

A comprehensive Data Transfer Object for handling Google Places API responses in the WayGo App.

## Overview

The `PlaceDTO` class provides a structured way to handle complex Google Places API data. It includes methods for parsing JSON responses, converting back to JSON, and utility methods for common operations.

## Features

- 🏗️ **Full Google Places API Support** - Handles all fields from Places API responses
- 🔄 **Bidirectional Conversion** - `fromJson()` and `toJson()` methods
- 🛠️ **Utility Methods** - Common operations made simple
- ✅ **Validation** - Built-in data validation
- 📚 **Well Documented** - Comprehensive JSDoc comments
- 🧪 **Examples Included** - Real-world usage examples

## Installation

Simply require the PlaceDTO class in your Node.js application:

```javascript
const PlaceDTO = require('./src/models/PlaceDTO');
```

## Quick Start

### Basic Usage

```javascript
// Parse Google Places API response
const place = PlaceDTO.fromJson(googlePlacesApiResponse);

// Access place information
console.log(place.name);                    // "Chick-fil-A"
console.log(place.formattedAddress);        // "1162 Blossom Hill Rd, San Jose, CA 95118, USA"
console.log(place.rating);                  // 4.5
console.log(place.isCurrentlyOpen());       // true/false

// Get simplified data for UI display
const simplified = place.getSimplified();
console.log(simplified);
// {
//   placeId: "ChIJ...",
//   name: "Chick-fil-A",
//   address: "1162 Blossom Hill Rd, San Jose, CA 95118, USA",
//   rating: 4.5,
//   coordinates: { lat: 37.25, lng: -121.88 },
//   ...
// }
```

### Working with Address Components

```javascript
const place = PlaceDTO.fromJson(response);

// Extract specific address parts
const city = place.getAddressComponent('locality');           // "San Jose"
const state = place.getAddressComponent('administrative_area_level_1'); // "California"
const country = place.getAddressComponent('country');         // "United States"
```

### Opening Hours

```javascript
const place = PlaceDTO.fromJson(response);

// Check if currently open
const isOpen = place.isCurrentlyOpen();  // true/false

// Get formatted hours for display
const hours = place.getFormattedHours();
// [
//   "Monday: 6:30 AM – 11:00 PM",
//   "Tuesday: 6:30 AM – 11:00 PM",
//   ...
// ]
```

## API Reference

### Static Methods

#### `PlaceDTO.fromJson(json)`
Creates a new PlaceDTO instance from Google Places API JSON response.

**Parameters:**
- `json` (Object) - Google Places API response object

**Returns:** `PlaceDTO` instance

### Instance Methods

#### `toJson()`
Converts the PlaceDTO instance back to JSON format.

**Returns:** Object - JSON representation of the place

#### `getSimplified()`
Returns essential place data for basic display purposes.

**Returns:** Object with simplified place information

#### `isCurrentlyOpen()`
Checks if the place is currently open.

**Returns:** Boolean or null if unknown

#### `getAddressComponent(type)`
Extracts a specific address component by type.

**Parameters:**
- `type` (String) - Component type (e.g., 'locality', 'country')

**Returns:** String or null if not found

#### `getFormattedHours()`
Gets formatted opening hours for display.

**Returns:** Array of formatted hour strings

#### `isValid()`
Validates that the DTO has minimum required fields.

**Returns:** Boolean - true if valid

### Properties

The PlaceDTO includes all properties from the Google Places API:

#### Basic Information
- `placeId` - Unique place identifier
- `name` - Place name
- `formattedAddress` - Human-readable address
- `formattedPhoneNumber` - Formatted phone number
- `website` - Place website URL
- `rating` - Average rating (1-5)
- `userRatingsTotal` - Total number of ratings

#### Location Data
- `geometry.location.lat` - Latitude
- `geometry.location.lng` - Longitude
- `geometry.viewport` - Recommended viewport for display

#### Hours & Services
- `openingHours` - Regular opening hours
- `currentOpeningHours` - Current opening hours
- `secondaryOpeningHours` - Drive-through, delivery hours
- `delivery` - Delivery available
- `dineIn` - Dine-in available
- `takeout` - Takeout available

#### Content
- `reviews[]` - Array of user reviews
- `photos[]` - Array of place photos
- `editorialSummary` - Editorial description

## Examples

See `PlaceDTO.examples.js` for comprehensive usage examples including:

- Creating PlaceDTO from JSON
- Converting back to JSON
- Using utility methods
- Working with address components
- Error handling and validation

Run the examples:
```bash
node src/models/PlaceDTO.examples.js
```

## Data Structure

The PlaceDTO handles the complete Google Places API response structure, including:

```javascript
{
  // Basic info
  place_id: "ChIJ...",
  name: "Restaurant Name",
  formatted_address: "123 Main St, City, State",
  
  // Contact info
  formatted_phone_number: "(555) 123-4567",
  website: "https://example.com",
  
  // Location
  geometry: {
    location: { lat: 37.25, lng: -121.88 },
    viewport: { ... }
  },
  
  // Hours
  opening_hours: {
    open_now: true,
    periods: [...],
    weekday_text: [...]
  },
  
  // Services
  delivery: true,
  dine_in: true,
  takeout: true,
  
  // Content
  reviews: [...],
  photos: [...],
  
  // And much more...
}
```

## Migration from UnifiedGeoJson

This PlaceDTO is designed to replace the existing `UnifiedGeoJson` object. Migration steps:

1. **New integrations** - Use PlaceDTO for all new Google Places API work
2. **Gradual replacement** - Replace UnifiedGeoJson usage incrementally
3. **Testing** - Verify functionality with existing data
4. **Deprecation** - Remove UnifiedGeoJson once migration is complete

## Testing

The PlaceDTO includes comprehensive validation and error handling:

```javascript
// Validate place data
const place = PlaceDTO.fromJson(response);
if (place.isValid()) {
  // Process valid place
} else {
  // Handle invalid data
}
```

## Contributing

When extending the PlaceDTO:

1. Follow existing naming conventions (camelCase for properties)
2. Add JSDoc documentation for new methods
3. Include null checks for optional fields
4. Update examples if adding new functionality
5. Ensure backward compatibility

## License

This code is part of the WayGo App project.
