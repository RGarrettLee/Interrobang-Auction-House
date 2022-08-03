import { React, useState } from 'react'
import Axios from 'axios'
import { Box, TextField, Paper, Button } from '@mui/material/';
import { Image } from 'cloudinary-react';
import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from "@cloudinary/url-gen";
import { fill } from "@cloudinary/url-gen/actions/resize";




const ImageUpload = (props) => {




    //use state
    const [imageSelected, setImageSelected] = useState('');
    const [url, setUrl] = useState('');

    const uploadImage = async () => {

        const formData = new FormData()
        formData.append("file", imageSelected)
        formData.append("upload_preset", "okou8sjt")
        // formData.append("cloud_name", "")
       await Axios.post("https://api.cloudinary.com/v1_1/dp2yphxuk/image/upload", formData)
            .then ((res) => {
                console.log(setUrl(res.data.secure_url))
                props.setState({...props.state, 'images': url});
            })
           // .then((formData) => { console.log(formData) }); //setUrl(res.data.secure_url)


    };
    return (
        <Box className="text-center justify-center p-2">
            <div className="col">
                <div>
                    <Image style={{ width: "200px", borderRadius: "20px", padding: "10px" }} src={url} />
                </div>
                <div>
                    <input type="file" onChange={(event) => {
                        setImageSelected(event.target.files[0])
                    }}
                    />
                </div>
                <div className="text-center justify-center p-2">
                    <Button  variant="contained" color="secondary" onClick={uploadImage}>
                        Upload Image
                    </Button>
                </div>
            </div>
        </Box>
    )
}

export default ImageUpload