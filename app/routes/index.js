import Ember from 'ember';



export default Ember.Route.extend({
  renderTemplate: function(){
    this.render();
    this.render('city', {
      into: 'index',
      outlet: 'cityOutlet'
    })
  },
  model() {
    return this.store.findAll('rental');
  },
  actions: {
    save3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transition('index');
    },
    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTo('index');
    }
  }
});
