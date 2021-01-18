import React from 'react';
import './App.css';

function ShowPhotos(props){
    function photosHelper(){
        return props.photos.map( (apic, idx) => {
            return <img className='pics' src={apic.photos[0].original_size.url} alt='from tumblr' />;
        }

        )
    };

    return(
        <section>{photosHelper()}</section>
    );
}

export default ShowPhotos;