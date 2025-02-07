import { useForm } from "react-hook-form";
import { useState } from "react";
import { Camera, X } from 'lucide-react';
import styles from '../styles/form.module.css'

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
    <div className="col bg-white p-4" style={{ borderRadius: '8px'}}>
      <label htmlFor="file-upload" className={`${preview ? '' : 'bg-light'} ${styles.imgUploader} d-flex align-items-center justify-content-center text-center p-3`}>
        {preview ? (    
         <div className="relative">
          <img
            src={preview}     
            alt="Uploaded"
            className="my-2"
            style={{ width : "480px", height: "200px", objectFit : "cover"}}
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
            <p style={{ color :'#ff6d39'}}>Upload Photo</p>
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
