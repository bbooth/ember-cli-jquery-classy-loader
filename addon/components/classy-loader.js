import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'canvas',
  width: undefined,
  height: undefined,
  animate: undefined,
  percentage: undefined,
  speed: undefined,
  showRemaining: undefined,
  start: undefined,
  fontFamily: undefined,
  showText: undefined,
  fontSize: undefined,
  roundedLine: undefined,
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
      percentage: this.get('animate') === "false" ? 0 : this.get('percentage'),
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
