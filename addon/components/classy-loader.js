import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'canvas',
  width: undefined,
  height: undefined,
  animate: true,
  percentage: undefined,
  speed: undefined,
  showRemaining: true,
  start: undefined,
  fontFamily: undefined,
  showText: true,
  fontSize: undefined,
  roundedLine: false,
  diameter: undefined,
  fontColor: undefined,
  lineColor: undefined,
  remainingLineColor: undefined,
  lineWidth: undefined,
  loader: null,
  setupClassyLoader: function () {
    this.set('loader', this.$().ClassyLoader({
      width: this.get('width'),
      height: this.get('height'),
      animate: this.get('animate'),
      percentage: this.get('animate') ? this.get('percentage') : 0,
      speed: this.get('speed'),
      showRemaining: this.get('showRemaining'),
      start: this.get('start'),
      fontFamily: this.get('fontFamily'),
      showText: this.get('showText'),
      fontSize: this.get('fontSize'),
      roundedLine: this.get('roundedLine'),
      diameter: this.get('diameter'),
      fontColor: this.get('fontColor'),
      lineColor: this.get('lineColor'),
      remainingLineColor: this.get('remainingLineColor'),
      lineWidth: this.get('lineWidth')
    }));
  }.on('didInsertElement'),
  draw: function () {
    var loader = this.get('loader');
    loader.draw(this.get('percentage'));
  },
  click: function () {
    this.sendAction('action', this);
  }
});
