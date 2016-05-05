class FilterUtil {
  static filter(citizens, query) {
    let filteredCitizens = citizens.slice();
    for (var key in query) {
      filteredCitizens = filteredCitizens.filter(function(citizen) {
        return query[key] === '' ? true : citizen[key] === query[key];
      });
    }
    return filteredCitizens;
  }

  static getOptions(citizens, fieldName) {
    const options = [];
    citizens.map(function (citizen, i) {
      if (!options.includes(citizen[fieldName])) {
        options.push(citizen[fieldName]);
      }
    });
    return options;
  }

  static getCharacters(citizens) {
    return this.getOptions(citizens, 'character');
  }

  static getHometowns(citizens) {
    return this.getOptions(citizens, 'hometown');
  }

  static getSizes(citizens) {
    return this.getOptions(citizens, 'size');
  }
}

export default FilterUtil;
