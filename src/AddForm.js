import React from 'react'
import { Button, FormControl, TextField } from '@material-ui/core'
import './AddForm.css'

function AddForm(props) {
    return (
        <div className="form">
            
            <FormControl>
            <h1>Add Book</h1><br></br>
            
            <div className="line1">
            
            <TextField value={props.titlee} onChange={props.titlein} id="title" variant="filled" label="Enter book Title" /> <br></br> 
            <TextField value={props.authorr} onChange={props.authorin} id="author" variant="filled" label="Author Name" />  <br></br>
            <TextField value={props.pricee} onChange={props.pricein} id="price" variant="filled" label="Price of the Book" /> <br></br> 

            </div>

            <div className="line2">

            <TextField
                    value={props.descriptione}
                    onChange={props.descriptionin}
                    id="filled-multiline-static"
                    label="Description about the Book"
                    multiline
                    rows={4}
                    fullWidth
                    placeholder="Description"
                    variant="filled"
                /> <br></br>

            </div>
               
            <div className="line3">
                <Button 
                    disabled={!props.titlee, !props.pricee} 
                    type="submit" onClick={props.button} 
                    className='button' 
                    variant="contained" 
                    color="primary"
                >
                    Upload
                </Button>
            
            </div>    
                
               
            </FormControl>
        </div>
    )
}

export default AddForm
