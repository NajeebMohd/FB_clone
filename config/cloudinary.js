const cloudinary = require('cloudinary').v2;
// Configuration 
cloudinary.config({
  cloud_name: "du0wzcpeb",
  api_key: "949189717521512",
  api_secret: "JZdgnQySX_OssVH1ykhbjGkzzGc"
});


// Upload

module.exports.upload = function(imgpath,name){
    const res = cloudinary.uploader.upload(imgpath, {public_id: name});

    let Url;
    res.then((data) => {
      console.log(data);
      console.log(data.secure_url);
      Url = data.secure_url;
    
    }).catch((err) => {
    console.log(err);
    return
    });


    // Generate 
    const url = cloudinary.url(name, {
      width: 100,
      height: 150,
      Crop: 'fill'
    });
    
   



    // The output 
    //console.log(url," **the pic ture &&  ");
    if(Url){
      return Url;
    }
}

