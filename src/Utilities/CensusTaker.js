class CensusTaker {
  static countCharacter(character, citizens) {
    let count = 0;
    for (let c in citizens) {
      if (citizens[c]['character'] === character) {
        count++;
      }
    }
    return count;
  }
}

export default CensusTaker;
