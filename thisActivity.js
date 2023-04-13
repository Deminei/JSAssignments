const photoSlideShow = {
    photoList: ['photo1.png', 'photo2.png', 'photo3.png', 'photo4.png'],
    currentPhotoIndex: 0,
    /* moves currentPhotoIndex to the next index 'if' there is one then logs the photo name
    'else' logs "End of slideshow*/
    nextPhoto() {
      if (this.currentPhotoIndex < this.photoList.length - 1) {
        this.currentPhotoIndex++;
        console.log(this.photoList[this.currentPhotoIndex]);
      } else {
        console.log("End of slideshow");
      }
    },
    /* moves currentPhotoIndex to the previous index 'if' there is one
    then logs the photo name 'else' logs "Begining of slideshow"
    if there are no remaining properties to back to*/
    prevPhoto() {
      if (this.currentPhotoIndex > 0) {
        this.currentPhotoIndex--;
        console.log(this.photoList[this.currentPhotoIndex]);
      } else {
        console.log("Beginning of slideshow");
      }
    },
    /* returns currrent photo from list */
    getCurrentPhoto() {
      return this.photoList[this.currentPhotoIndex];
    }
  };
  console.log(photoSlideShow.getCurrentPhoto());// logs current property in array "photo1.png"
  photoSlideShow.nextPhoto();// logs "photo2.png"
  photoSlideShow.nextPhoto();// logs "photo3.png"
  photoSlideShow.nextPhoto();// logs "photo4.png"
  photoSlideShow.nextPhoto();// moved index farther than properties contained in array so returns "End of slideshow"
  photoSlideShow.prevPhoto();// moves index backwards 1 and logs "photo3.png"
  photoSlideShow.prevPhoto();// moves index backwards 1 and logs "photo2.png"
  photoSlideShow.prevPhoto();// moves index backwards 1 and logs "photo1.png"
  photoSlideShow.prevPhoto();// moved index farther back than properties contained in array so returns "Begining of slideshow"
  console.log(photoSlideShow.getCurrentPhoto()); // logs "photo1.png"
  //console-logged so much to make sure it was working right
