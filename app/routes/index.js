import Ember from 'ember';
//
// var rentals = [
//   {id: 1,
//   owner: "Johnny Depp",
//   city: "San Francisco",
//   type: "Mansion",
//   bedrooms: "598",
//   image: "http://cdn.cstatic.net/images/gridfs/50508e1a85216d04f500a0bc/Screen%20Shot%202012-09-12%20at%209.23.48%20AM.png"
// }, {
//   id: 2,
//   owner: "Mike TV",
//   city: "Seattle",
//   type: "Condo",
//   bedrooms: 1,
//   image: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg"
// }, {
//   id: 3,
//   owner: "Violet Beauregarde",
//   city: "Portland",
//   type: "Apartment",
//   bedrooms: 3,
//   image: "https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg"
// }
// ];
//


export default Ember.Route.extend({
  model() {
    return this.store.findAll('rental');
  },

  actions: {
    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTo('index');
    }
  }
});
