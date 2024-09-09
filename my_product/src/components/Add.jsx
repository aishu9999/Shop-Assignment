import { Box, Button, TextField } from '@mui/material'
import React from 'react'

const Add = () => {
    return (
        <div>
            <br /><br />
            <h1>Add Product</h1>
            <Box component="form">
                <TextField label='Title' variant='filled' sx={{ width: "480px" }} ></TextField><br></br><br></br>
                <TextField label='Price' variant='filled' sx={{ width: "480px" }}></TextField><br></br><br></br>
                <TextField label='Category' variant='filled' sx={{ width: "480px" }}></TextField><br></br><br></br>
                <TextField type="file" label='' variant='filled' sx={{ width: "480px" }}></TextField><br></br><br></br>
                <Button variant='contained' type="submit" sx={{ width: "480px" }}>Submit</Button>
            </Box>

        </div>
    )
}

export default Add
