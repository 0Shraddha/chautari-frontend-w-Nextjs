import { useForm } from "react-hook-form";
import { useState } from "react";
import { Camera, X } from 'lucide-react';

export default function UploadPhoto() {
  const { register, setValue } = useForm();
  const [preview, setPreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && (file.type === "image/png" || file.type === "image/jpeg")) {
      setPreview(URL.createObjectURL(file));
      setValue("photo", file);
    }
  };

  const handleClearImage = () => {
    setPreview(null);
    setValue("photo", null);
  };

  return (
    <div className="flex flex-col align-items-center justify-item-center border-2 border-dashed border-gray-300 rounded-lg p-4 w-72 cursor-pointer">
      <label htmlFor="file-upload" className={`${preview ? '' : 'bg-light'} d-flex align-items-center justify-content-center text-center p-3`} style={{ border: '1px dotted gray', borderRadius : '8px', width : "500px", height: "200px"}}>
        {preview ? (
         <div className="relative">
          <img
            src={preview}
            alt="Uploaded"
            className="my-2"
            style={{ width : "450px", height: "180px", objectFit : "cover"}}
          />
          <X 
          size={'8px'}
          style={{ position: 'absolute',
            top: '0 !important',
            right: '0 !important',
            color : '#fff',
            background: 'dimgray',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            padding: '2px'
        }}
            onClick={handleClearImage}
              />
          </div>
        ) : (
          <div className="py-3 px-5" id="uploadImg">
            <Camera size={22} className="mb-3"/>
            <p className="text-warning">Upload Photo</p>
            <p className="text-secondary">PNG or JPEG (max. 10MB)</p>
          </div>
        )}
      </label>
      <input
        id="file-upload"
        type="file"
        accept="image/png, image/jpeg"
        className="d-none"
        {...register("photo")}
        onChange={handleFileChange}
      />
    </div>
  );
}
