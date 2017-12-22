(function() {
  //Scott's Ducks
  var main = function($) { 
    var self = $.SD = new function(){};
    
    $.extend(self, {
      duckImgs : [
      'https://peopledotcom.files.wordpress.com/2017/03/duck.jpg?w=2000',
      'https://fthmb.tqn.com/RI7NlXG8h4s0wIkUghR4d_r9wWY=/1500x1000/filters:fill(auto,1)/wood-duck-5898a1ad5f9b5874ee96a5e3.jpg',
      'https://hdwallsource.com/img/2014/8/duck-wallpaper-13944-14362-hd-wallpapers.jpg',
      'https://web.stanford.edu/dept/CTL/cgi-bin/academicskillscoaching/wp-content/uploads/2012/07/baby-duck.jpg',
      'https://cryandhowl.files.wordpress.com/2012/12/cute-little-duck.jpg',
      'https://cdn.thinglink.me/api/image/879024827430600705/1240/10/scaletowidth',
      'https://i.pinimg.com/736x/2c/ac/ae/2cacae63626e91d6887608bf51217907--spring-animals-baby-animals.jpg',
      'https://images-na.ssl-images-amazon.com/images/I/41sfz8dKX1L._SL500_AC_SS350_.jpg',
      'https://c2.staticflickr.com/2/1219/847643306_f792636da2_z.jpg?zz=1',
      'https://i.pinimg.com/736x/38/50/a3/3850a3221a0f3bf41117d35191a75a3c--beautiful-birds-free-image.jpg',
      'https://i.pinimg.com/originals/c8/05/6a/c8056a3dcfb1758ee96bb62e068e95fa.jpg',
      'https://s3-ap-southeast-2.amazonaws.com/goodcms/woap/event/buffalo-.jpg',
      ],
      handleImages : function (lstImgs, time)
      {
        $.each($('img'), function(i,item) { 
          //Skip if image is already replaced
          if($.inArray($(item).attr('src'), lstImgs) == -1)
          {
            var h = $(item).height();
            var w = $(item).width();
            
            //If image loaded
            if(h > 0 && w > 0)
            {
              //Replace
              $(item).css('width', w + 'px').css('height', h + 'px');
              $(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
            }
            else
            {
              //Replace when loaded
              $(item).on("load", function(){
                //Prevent 'infinite' loop
                  if($.inArray($(item).attr('src'), lstImgs) == -1)
                  {
                    var h = $(item).height();
                    var w = $(item).width();
                    $(item).css('width', w + 'px').css('height', h + 'px');
                    $(item).attr('src', lstImgs[Math.floor(Math.random() * lstImgs.length)]); 
                  }
                });
              }
            }
          });
          
          //Keep replacing
          if(time > 0)
            setTimeout(function(){self.handleImages(lstImgs, time);},time);
        }
      });

    //Run on jQuery ready
    $(function(){
      self.handleImages(self.duckImgs, 1000);
    });
  };

  main(jQuery);
})();