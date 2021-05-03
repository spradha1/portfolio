import React, { Component } from 'react';
import '../styles/info.css';
import firebase from '../firebasestore';
import 'firebase/firestore';
import 'firebase/storage';


class Gallery extends Component {

  state = {
    gallery: []
  }

  componentDidMount = () => {
    this.fetchGallery();
  }


  fetchGallery = () => {
    const db = firebase.firestore();
    const storage = firebase.storage().ref();
    const holder = this.state.gallery;
    const galleryRef = db.collection('gallery');
    galleryRef.get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        let item = doc.data();  
        storage.child(`${item.image}`).getDownloadURL().then(url => {
          item.url = url;
        }).then(() => {
          holder.push(item);
          this.setState({gallery: holder});
        }).catch(function(e) {
          console.log(e.message);
        });
      });
    });
  }


  render() {

    var gallery = this.state.gallery;
    
    return (
      <div className="Gallerymain" id="Gallery">
				<h3>IMAGE GALLERY</h3>
        <div className="galleryGrid">
          {gallery.map((photo, idx) => {
            return (
              <div className="galleryImageBox" key={idx}>
                <img src={photo.url} alt='Related view' />
                {photo.details}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Gallery;