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
        <form onSubmit={handleSubmit(onSubmit)} className="p-4 border rounded-md">
            <InputElement
            label="Restaurant Name"
            placeholder = "Enter restaurant name"
            {...register("name", {required: "Name is required"})}
            error={errors.name?.message}
            />

            <InputElement
                label="Address"
                placeholder = "Enter restaurant address"
                {...register("address", { required: "Address is required" })}
                error={errors.address?.message}
            />

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

