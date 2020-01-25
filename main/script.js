$(document).ready(function () {
  $('#fullpage').fullpage({
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage', '5thPage'],
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['First page', 'Second page', 'Third page', 'Fourth page', 'Fifth page'],
    scrollBar: true,
    afterRender: function (index, nextIndex, direction) {
      var el = $('.intro');
      el.paroller({
        factor: 0.5,
        type: 'background',
        direction: 'vertical'
      });
    },
    /* We need reinitialize paroller on window resize event */
    afterResize: function () {
      var el = $('.intro');
      el.paroller({
        factor: 0.5,
        type: 'background',
        direction: 'vertical'
      });
    }
  });
});