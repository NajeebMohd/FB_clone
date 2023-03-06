const cloudinary = require('cloudinary').v2;
// Configuration 
cloudinary.config({
  cloud_name: "du0wzcpeb",
  api_key: "949189717521512",
  api_secret: "JZdgnQySX_OssVH1ykhbjGkzzGc"
});

// Upload
module.exports.Upload =  function(imgpath,name){
  return new Promise((resolve,reject) => {
    const res = cloudinary.uploader.upload(imgpath, {public_id: name});    
      res.then((data) => {
        console.log(data); 
        
        resolve(data.secure_url);    
      
      }).catch((err) => {
          reject('failed');
          console.log(err);    
      });  
    
      // Generate 
      const url = cloudinary.url(name, {
        width: 100,
        height: 150,
        Crop: 'fill'
      });
  })    
}

