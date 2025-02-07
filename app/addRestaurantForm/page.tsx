"use client";

import AddRestaurantDetail from '../component/AddRestaurantDetail'
import ImageUploader from '../component/ImageUploader';
// import Button from '../component/elements/Button';
import FormMultiSelect from '../component/elements/MultiSelectElement';
import Subheading from '../component/elements/Subheading';


const RestaurantFormPage = () => {
    return (
        <>
        
        <div className="row d-flex">
            <div className="col-7 bg-white p-4 me-3" style={{ borderRadius: '8px'}}>
                <Subheading text={"Basic Information"} />

                <AddRestaurantDetail />
            </div>
            <div className="col">
                <ImageUploader/>
                <div className="mt-3">
                    <FormMultiSelect />
                </div>
            </div>
            <div className="col-7 bg-white p-4 mt-3 me-3" style={{ borderRadius: '8px'}}>
                <Subheading text={"Theme Information"} />

                <AddRestaurantDetail />
            </div>
        </div>

<div className="col">
{/* <Button text={"Submit"} type={"submit"} /> */}

</div>

        </>
    )
}

export default RestaurantFormPage;