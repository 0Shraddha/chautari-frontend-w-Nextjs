"use client";

import { useForm } from "react-hook-form";
import InputElement from '../component/elements/InputElement';
import TextareaElement from '../component/elements/TextareaElement';
import Button from "./elements/Button";

type RestaurantFormInputs = {
    name : string;
    address : string;
    email : string;
    phone : string;
    description : string;
}


export default function RestaurantDetailForm(){
    const {
        register,
        handleSubmit,
        formState  : { errors },
    } = useForm<RestaurantFormInputs>();

    const onSubmit = (data: RestaurantFormInputs) => {
        console.log("Restaurant Data:", data);
      };

    return(
        <form onSubmit={handleSubmit(onSubmit)} className="p-4">
           <div className="row mb-3">
            <div className="col">
                <InputElement
                    label="Restaurant Name"
                    placeholder = "Enter restaurant name"
                    {...register("name", {required: "Name is required"})}
                    error={errors.name?.message}
                />
            </div>
            <div className="col">
                
            <InputElement
                label="Address"
                placeholder = "Enter restaurant address"
                {...register("address", { required: "Address is required" })}
                error={errors.address?.message}
            />
            </div>
           </div>
           <div className="row mb-3">
            <div className="col">
            <InputElement
                label="Phone"
                placeholder = "Enter restaurant phone"
                {...register("phone", { required: "Phone no. is required" })}
                error={errors.phone?.message}
            />
           
            </div>
            <div className="col">
            <InputElement
                label="Email"
                placeholder = "Enter restaurant email"
                {...register("email", { required: "Email is required" })}
                error={errors.email?.message}
            />
            </div>
           </div>

        <TextareaElement
            label="Description"
            placeholder = "Enter description"
            {...register("description", { required: "Description is required" })}
            error={errors.description?.message}
        />

        <Button text={"Submit"} type={"submit"} />
        </form>
    )
}

