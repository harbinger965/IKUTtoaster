﻿Backbone.View.prototype.destroy = function () {
    // chain call for removing all subviews under curent view.
    if (this.views != undefined) {
        _.invoke(this.views, 'destroy');
        this.views.length = 0;
    }

    // remove binded event of current view (comment out since it will be handled by remove() call.
    //this.undelegateEvents();

    // remove jquery data
    this.$el.removeData().unbind(); 

    // remove view from dom (most browswer's remove() also handle unbind().
    this.remove();
    //this.unbind();

    // remove child doms (I am not exactly sure to call this.. This iterates all children dom elements, so it can make program slower).
    this.$el.find("*").remove();

    // I believe most of remove related function will be handled by this remove() call.
    Backbone.View.prototype.remove.call(this);

    // remove any model bind events if it's defined. (onDestroy() function should be defined manually in each view).
    if (this.onDestroy) {
        this.onDestroy();
    }
}

$(document).ready(function () {
    var url: any = window.location;
    console.log(url.origin + window.location.pathname);
    Wakey.View.setElement({ el: $('#wrapper-main') });

    // Start Router
    Backbone.history.start();
});
