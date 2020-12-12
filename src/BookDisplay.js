import React, { Component } from 'react'
import { Form, Spinner } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { db } from './Config';
import { TextField, Button } from '@material-ui/core';
import Cards from './Card'
import './BookDisplay.css';
import { Breakpoint } from 'react-socks';


class BookDisplay extends Component {
    state = {
        bookData: [],
        title: '',
        author: '',
        price: '',
        isbn: '',
        username: '',
        password: ''
    }

    componentDidMount() {
        db.collection('BookDetails').get().then(data => {
            data.docs.forEach(doc => {
                this.setState({
                    bookData: [...this.state.bookData, doc.data()]
                })
            })
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleFormUsername = (e) => {
        this.setState({
            username: e.target.value
        })

    }

    handleFormPassword = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    submitData = (e) => {
        e.preventDefault();

        console.log("Successfully added");
        console.log(this.state.username);
        console.log(this.state.password);

        if (this.state.username === "bookadmin" && this.state.password === "pwdadmin") {
            alert("Successfully added.");
        } else {
            alert("Invalid username or password");
            return false;
        }
        db.collection('BookDetails').add({
            title: this.state.title,
            author: this.state.author,
            price: this.state.price,
            isbn: this.state.isbn
        })

    }

    render() {
        return (
            <div id="BookCards"  className="BookCards">
                <h1 className="heading-availablebooks">Available Books</h1>
                <div className="displaycards">
                {this.state.bookData.length ? (
                                this.state.bookData.map(item => {
                                    return (
                                        <ul>
                                            <li>
                                            <Cards 
                                                title={item.title} 
                                                price={item.price}
                                                author={item.author}
                                                isbn={item.isbn}
                                            />
                                            </li>
                                        </ul>
                                       
                                    )
                                })
                            ) : (
                                    <Spinner animation="border" />
                                )}
                </div>

                <div id="addform">
                    <h1 className="heading1-addbook">ADD NEW BOOK</h1>
                        <Form  className="form" onSubmit={this.submitData}>
                            
                            <div className="details">

                                <TextField 
                                    onChange={this.handleChange} 
                                    name="title" 
                                    id="standard-basic" 
                                    label="Enter book Title"
                                    />

                                    <TextField 
                                        onChange={this.handleChange} 
                                        name="author" 
                                        id="standard-basic" 
                                        label="Enter Author's Name"
                                    /> 
                           
                                    <TextField  
                                        onChange={this.handleChange} 
                                        name="price" 
                                        id="standard-basic" 
                                        label="Enter the Price"
                                    /> 

                                    <TextField 
                                        onChange={this.handleChange} 
                                        name="isbn" 
                                        id="standard-basic" 
                                        label="Enter the ISBN"
                                    /> 
                            </div>

                            <div className="auth">
                                    <TextField 
                                        onChange={this.handleFormUsername} 
                                        name="username" 
                                        id="standard-basic" 
                                        label="Enter Username"
                                    /> 

                                    <TextField 
                                        onChange={this.handleFormPassword} 
                                        name="username" 
                                        id="standard-basic" 
                                        label="Password"
                                        type="password"
                                    /> 

                                    <Button variant="contained" color="primary" onClick={this.submitData}>
                                            ADD BOOK
                                    </Button>
                                    
                                </div>    

                        </Form>
                </div>
            </div>
        )
    }
}

export default BookDisplay;