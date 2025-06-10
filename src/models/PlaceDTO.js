/**
 * PlaceDTO - Data Transfer Object for Google Places API responses
 * This DTO handles the complex structure of Google Places API data
 * and provides clean fromJson/toJson methods for data manipulation
 */

class PlaceDTO {
  constructor() {
    // Basic place information
    this.placeId = null;
    this.name = null;
    this.formattedAddress = null;
    this.formattedPhoneNumber = null;
    this.internationalPhoneNumber = null;
    this.website = null;
    this.businessStatus = null;
    this.rating = null;
    this.userRatingsTotal = null;
    this.priceLevel = null;
    this.vicinity = null;
    this.url = null;
    
    // Address components
    this.addressComponents = [];
    this.adrAddress = null;
    
    // Location and geometry
    this.geometry = {
      location: {
        lat: null,
        lng: null
      },
      viewport: {
        northeast: { lat: null, lng: null },
        southwest: { lat: null, lng: null }
      }
    };
    
    // Plus code
    this.plusCode = {
      compoundCode: null,
      globalCode: null
    };
    
    // Opening hours
    this.openingHours = {
      openNow: null,
      periods: [],
      weekdayText: []
    };
    this.currentOpeningHours = {
      openNow: null,
      periods: [],
      weekdayText: []
    };
    
    // Secondary opening hours (drive-through, delivery, etc.)
    this.secondaryOpeningHours = [];
    
    // Service offerings
    this.delivery = null;
    this.dineIn = null;
    this.takeout = null;
    this.curbsidePickup = null;
    this.reservable = null;
    this.wheelchairAccessibleEntrance = null;
    
    // Food service types
    this.servesBeer = null;
    this.servesWine = null;
    this.servesBreakfast = null;
    this.servesBrunch = null;
    this.servesLunch = null;
    this.servesDinner = null;
    this.servesVegetarianFood = null;
    
    // Content
    this.editorialSummary = {
      language: null,
      overview: null
    };
    this.reviews = [];
    this.photos = [];
    
    // Metadata
    this.types = [];
    this.icon = null;
    this.iconBackgroundColor = null;
    this.iconMaskBaseUri = null;
    this.utcOffset = null;
  }

  /**
   * Create PlaceDTO instance from Google Places API JSON response
   * @param {Object} json - Google Places API response object
   * @returns {PlaceDTO} - New PlaceDTO instance
   */
  static fromJson(json) {
    const place = new PlaceDTO();
    
    // Basic information
    place.placeId = json.place_id || null;
    place.name = json.name || null;
    place.formattedAddress = json.formatted_address || null;
    place.formattedPhoneNumber = json.formatted_phone_number || null;
    place.internationalPhoneNumber = json.international_phone_number || null;
    place.website = json.website || null;
    place.businessStatus = json.business_status || null;
    place.rating = json.rating || null;
    place.userRatingsTotal = json.user_ratings_total || null;
    place.priceLevel = json.price_level || null;
    place.vicinity = json.vicinity || null;
    place.url = json.url || null;
    
    // Address components
    place.addressComponents = json.address_components || [];
    place.adrAddress = json.adr_address || null;
    
    // Geometry
    if (json.geometry) {
      place.geometry = {
        location: {
          lat: json.geometry.location?.lat || null,
          lng: json.geometry.location?.lng || null
        },
        viewport: {
          northeast: {
            lat: json.geometry.viewport?.northeast?.lat || null,
            lng: json.geometry.viewport?.northeast?.lng || null
          },
          southwest: {
            lat: json.geometry.viewport?.southwest?.lat || null,
            lng: json.geometry.viewport?.southwest?.lng || null
          }
        }
      };
    }
    
    // Plus code
    if (json.plus_code) {
      place.plusCode = {
        compoundCode: json.plus_code.compound_code || null,
        globalCode: json.plus_code.global_code || null
      };
    }
    
    // Opening hours
    if (json.opening_hours) {
      place.openingHours = {
        openNow: json.opening_hours.open_now || null,
        periods: json.opening_hours.periods || [],
        weekdayText: json.opening_hours.weekday_text || []
      };
    }
    
    if (json.current_opening_hours) {
      place.currentOpeningHours = {
        openNow: json.current_opening_hours.open_now || null,
        periods: json.current_opening_hours.periods || [],
        weekdayText: json.current_opening_hours.weekday_text || []
      };
    }
    
    // Secondary opening hours
    place.secondaryOpeningHours = json.secondary_opening_hours || [];
    
    // Service offerings
    place.delivery = json.delivery || null;
    place.dineIn = json.dine_in || null;
    place.takeout = json.takeout || null;
    place.curbsidePickup = json.curbside_pickup || null;
    place.reservable = json.reservable || null;
    place.wheelchairAccessibleEntrance = json.wheelchair_accessible_entrance || null;
    
    // Food service types
    place.servesBeer = json.serves_beer || null;
    place.servesWine = json.serves_wine || null;
    place.servesBreakfast = json.serves_breakfast || null;
    place.servesBrunch = json.serves_brunch || null;
    place.servesLunch = json.serves_lunch || null;
    place.servesDinner = json.serves_dinner || null;
    place.servesVegetarianFood = json.serves_vegetarian_food || null;
    
    // Editorial summary
    if (json.editorial_summary) {
      place.editorialSummary = {
        language: json.editorial_summary.language || null,
        overview: json.editorial_summary.overview || null
      };
    }
    
    // Reviews
    place.reviews = json.reviews || [];
    
    // Photos
    place.photos = json.photos || [];
    
    // Metadata
    place.types = json.types || [];
    place.icon = json.icon || null;
    place.iconBackgroundColor = json.icon_background_color || null;
    place.iconMaskBaseUri = json.icon_mask_base_uri || null;
    place.utcOffset = json.utc_offset || null;
    
    return place;
  }

  /**
   * Convert PlaceDTO instance to JSON object
   * @returns {Object} - JSON representation of the place
   */
  toJson() {
    return {
      place_id: this.placeId,
      name: this.name,
      formatted_address: this.formattedAddress,
      formatted_phone_number: this.formattedPhoneNumber,
      international_phone_number: this.internationalPhoneNumber,
      website: this.website,
      business_status: this.businessStatus,
      rating: this.rating,
      user_ratings_total: this.userRatingsTotal,
      price_level: this.priceLevel,
      vicinity: this.vicinity,
      url: this.url,
      address_components: this.addressComponents,
      adr_address: this.adrAddress,
      geometry: this.geometry,
      plus_code: {
        compound_code: this.plusCode.compoundCode,
        global_code: this.plusCode.globalCode
      },
      opening_hours: {
        open_now: this.openingHours.openNow,
        periods: this.openingHours.periods,
        weekday_text: this.openingHours.weekdayText
      },
      current_opening_hours: {
        open_now: this.currentOpeningHours.openNow,
        periods: this.currentOpeningHours.periods,
        weekday_text: this.currentOpeningHours.weekdayText
      },
      secondary_opening_hours: this.secondaryOpeningHours,
      delivery: this.delivery,
      dine_in: this.dineIn,
      takeout: this.takeout,
      curbside_pickup: this.curbsidePickup,
      reservable: this.reservable,
      wheelchair_accessible_entrance: this.wheelchairAccessibleEntrance,
      serves_beer: this.servesBeer,
      serves_wine: this.servesWine,
      serves_breakfast: this.servesBreakfast,
      serves_brunch: this.servesBrunch,
      serves_lunch: this.servesLunch,
      serves_dinner: this.servesDinner,
      serves_vegetarian_food: this.servesVegetarianFood,
      editorial_summary: {
        language: this.editorialSummary.language,
        overview: this.editorialSummary.overview
      },
      reviews: this.reviews,
      photos: this.photos,
      types: this.types,
      icon: this.icon,
      icon_background_color: this.iconBackgroundColor,
      icon_mask_base_uri: this.iconMaskBaseUri,
      utc_offset: this.utcOffset
    };
  }

  /**
   * Get simplified place information for basic display
   * @returns {Object} - Simplified place object
   */
  getSimplified() {
    return {
      placeId: this.placeId,
      name: this.name,
      address: this.formattedAddress,
      phone: this.formattedPhoneNumber,
      rating: this.rating,
      ratingCount: this.userRatingsTotal,
      priceLevel: this.priceLevel,
      isOpen: this.currentOpeningHours.openNow || this.openingHours.openNow,
      coordinates: {
        lat: this.geometry.location.lat,
        lng: this.geometry.location.lng
      },
      website: this.website,
      types: this.types
    };
  }

  /**
   * Check if the place is currently open
   * @returns {boolean|null} - true if open, false if closed, null if unknown
   */
  isCurrentlyOpen() {
    return this.currentOpeningHours.openNow || this.openingHours.openNow || null;
  }

  /**
   * Get the primary address component of a specific type
   * @param {string} type - Address component type (e.g., 'locality', 'country')
   * @returns {string|null} - The long name of the component, or null if not found
   */
  getAddressComponent(type) {
    const component = this.addressComponents.find(comp => 
      comp.types && comp.types.includes(type)
    );
    return component ? component.long_name : null;
  }

  /**
   * Get formatted opening hours for display
   * @returns {Array} - Array of formatted weekday hours
   */
  getFormattedHours() {
    return this.currentOpeningHours.weekdayText || this.openingHours.weekdayText || [];
  }

  /**
   * Validate that the DTO has minimum required fields
   * @returns {boolean} - true if valid, false otherwise
   */
  isValid() {
    return !!(this.placeId && this.name);
  }
}

module.exports = PlaceDTO;
