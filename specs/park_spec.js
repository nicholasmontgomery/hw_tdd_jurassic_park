const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dino1;
  let dino2;
  let dino3;

  beforeEach(function () {
    dino1 = new Dinosaur('Tyranosauras', 'carnivore', 1000);
    dino2 = new Dinosaur('Stegosauras', 'herbivore', 500);
    park = new Park('Jurassic Park', 100, [dino1, dino2]);
  })

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function(){
    const actual = park.price;
    assert.strictEqual(actual, 100)
    });

  it('should have a collection of dinosaurs', function(){
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, [dino1, dino2])
    });

  it('should be able to add a dinosaur to its collection', function(){
    dino3 = new Dinosaur('Triceratops', 'herbivore', 700);
    park.addDinosaur(dino3);
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, [dino1, dino2, dino3])
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinosaurByName(dino2);
    const actual = park.collectionOfDinosaurs;
    assert.deepStrictEqual(actual, [dino1])
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    const actual = park.mostVisitedDinosaur()
    assert.strictEqual(actual, dino1)
  });

  it('should be able to find all dinosaurs of a particular species', function() {
    const actual = park.speciesFind('Tyranosauras')
    assert.deepStrictEqual(actual, [dino1])
    });

  it('should be able to calculate the total number of visitors per day', function() {
    const actual = park.visitorsPerDay()
    assert.strictEqual(actual, 1500)
  });

  it('should be able to calculate the total number of visitors per year', function() {
    const actual = park.visitorsPerYear()
    assert.strictEqual(actual, 547500)
  });

  it('should be able to calculate total revenue for one year', function() {
    const actual = park.yearlyRevenue()
    assert.strictEqual(actual, 54750000)
  });

});
