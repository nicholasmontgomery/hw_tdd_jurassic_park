const Park = function(name, price, collectionOfDinosaurs) {
  this.name = name;
  this.price = price;
  this.collectionOfDinosaurs = collectionOfDinosaurs;
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.collectionOfDinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaurByName = function (dinosaur) {
  const indexOfDinosaur = this.collectionOfDinosaurs.indexOf(dinosaur);
  this.collectionOfDinosaurs.splice(indexOfDinosaur, 1)
}

Park.prototype.mostVisitedDinosaur = function() {
  let mostVisitedDinosaur = this.collectionOfDinosaurs[0];
    for (dinosaur in this.collectionOfDinosaurs) {
      if (dinosaur.guestsAttractedPerDay > this.collectionOfDinosaurs[0])
      {
      mostVisitedDinosaur = dinosaur
      }
    }
    return mostVisitedDinosaur
  };

Park.prototype.speciesFind = function (species) {
  let speciesArray = [];
    for (dinosaur of this.collectionOfDinosaurs) {
      if (dinosaur.species = species)
      {
      speciesArray.push(dinosaur)
      }
      return speciesArray
    }
  }

Park.prototype.visitorsPerDay = function() {
  let totalVisitors = 0;
  for (dinosaur of this.collectionOfDinosaurs) {
    totalVisitors += dinosaur.guestsAttractedPerDay
     }
     return totalVisitors
   }

Park.prototype.visitorsPerYear = function () {
  return this.visitorsPerDay() * 365;
};

Park.prototype.yearlyRevenue = function () {
  return this.visitorsPerYear() * this.price;
};


module.exports = Park;
