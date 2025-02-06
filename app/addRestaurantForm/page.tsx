"use client";

import AddRestaurantDetail from '../component/AddRestaurantDetail'
import ImageUploader from '../component/ImageUploader';

const RestaurantFormPage = () => {
    return (
        <>
        
        <div className="row d-flex">

            <div className="col">
                <AddRestaurantDetail />
            </div>
            <div className="col">
                <ImageUploader/>
            </div>
        </div>


        </>
    )
}

export default RestaurantFormPage;