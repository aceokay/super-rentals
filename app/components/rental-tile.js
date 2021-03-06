import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  actions: {
    imageShow: function() {
      this.set('isImageShowing', true);
    },
    imageHide: function() {
      this.set('isImageShowing', false)
    },
    delete(rental) {
      if (confirm('are you sure you want to delete')) {
        this.sendAction('destroyRental', rental);
      }
    }
  }
});
