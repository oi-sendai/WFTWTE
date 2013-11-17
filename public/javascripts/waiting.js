// var update = function(){

//   var then = moment('2012-12-21 11:11').format("X") //format("dddd, MMMM Do YYYY, h:mm:ss a");
//   ,   now = moment().format("X")
//   ,   late = now - then
//   ,   days = Math.floor(late / 86400)
//   ,   hours = Math.floor(late / 3600) % 24
//   ,   minutes = Math.floor(late / 60) % 60
//   ,   seconds = late % 60; 

//   $('.this-long').html(days+' days '+hours+' hours '+minutes+' minutes '+seconds+' seconds');

// };

// var Clock = function(){
  

//   time.update();
//   setInterval(time.update(), 1000);
// }



$(document).ready(function(){

  // var time = new Time();

  //////////////////////// View

  var Item = Backbone.Model.extend({
  
    defaults: {
      
      days    : 'hello',
      hours   : 'world',
      minutes : '0',
      seconds : '5' 
    }
  });

  var item = new Item({


  });

  /////////////////////// Collection

  var List = Backbone.Collection.extend({
  
    model: item
  });

console.log(item);

  ///////////////////////  View

  var ListView = Backbone.View.extend({
    
    el: $('.this-long'), // attaches `this.el` to an existing element.

    // events: {
      // 'click button#add': 'addItem'
    // },

    initialize: function(){
      
      _.bindAll(this, 'render', 'afterInterval'); // fixes loss of context for 'this' within methods

      this.collection = new List();
      // console.log(this.collection);
      // this.collection.bind('change', this.renderInterval);

      this.start(); // not all views are self-rendering. This one is.
    },

    // render: function(){
      
    //   $(this.el).append("<ul> <li>hello world</li> </ul>");
    // },

    afterInterval: function() {

      var then = moment('2012-12-21 11:11').format("X") //format("dddd, MMMM Do YYYY, h:mm:ss a");
      ,   now = moment().format("X")
      ,   late = now - then
      ,   days = Math.floor(late / 86400)
      ,   hours = Math.floor(late / 3600) % 24
      ,   minutes = Math.floor(late / 60) % 60
      ,   seconds = late % 60; 

      item.set({

        'days'    : days.toString(),
        'hours'   : hours.toString(),
        'minutes' : minutes.toString(),
        'seconds' : seconds.toString() 
      });
      // console.log(item);
      // item.trigger('change');
      this.renderInterval(item);

    },

    renderInterval: function(item){

      $(this.el).html(item.get('days')+' days '+item.get('days')+' hours '+item.get('minutes')+' minutes '+item.get('seconds')+' seconds'); 
    },

    start: function() {
      setInterval(this.afterInterval, 1000);
    }

  });  

  // new Clock();
  var listView = new ListView();
  
});

