
app.service('coolservice',function($http){
  var api='http://api.giphy.com/v1/gifs';


  this.randomGifFunction=function(){
    console.log('clicked');
    return $http({
            url:api+'/random',
            type:'GET',
            params:{
                    api_key:'dc6zaTOxFJmzC'
                  }
            }).then(function(res){
                  return res.data.data.image_url;
                console.log(res);
              }).catch(function(err){
                console.log('error');
              });
  };

  this.searchingForGif=function(search){
  // vm.searchGifFunction=function(){
    console.log('search clicked', search);
    return $http({
      url:api+'/search',
      type:'GET',
      params:{
              api_key:'dc6zaTOxFJmzC',
              q: search
            }
    }).then(function(res){
        console.log(res.data.data);
          return res.data.data;
        console.log(res);
      }).catch(function(err){
        console.log('error');
      });
  }






});
