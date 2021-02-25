import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Input from './Common/Input';
import { storage } from './Auth/storage'
import axios from 'axios'
import './stylesheet.css'
const FileCase = () => {
    const [name, setName] = useState("")
    const [title, setTitle] = useState("")

    const [cnic, setCnic] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [date, setDate] = useState("")

    const [caseFile, setCaseFile] = useState("")
    const [a, setA] = useState("")
    const caseNumber = Math.floor(Math.random() * 90000) + 10000;
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (caseFile == "") {
            alert("wait for file to upload")
            return
        }
        axios({
            method: 'post',
            url: 'http://localhost:3001/api/case/addCase',
            data: {
                name: name,
                cnic: cnic,
                address: address,
                phone: phone,
                date: date,
                caseFile: caseFile,
                title: title,
                caseNumber: caseNumber
            }
        }).then(res => {
            alert(`Your case registered with case number ${caseNumber}`)
        }).catch(err => {
            alert(err)
        });

    }
    const handleFile = async (file) => {
        await storage
            .ref(`pdf/${file.name}`)
            .put(file)
            .then((snapshot) => {
                alert("File Uploded");
            });
        await storage
            .ref(`pdf/${file.name}`)
            .getDownloadURL()
            .then((url) => {
                setCaseFile(url);
            });
    };

    useEffect(() => {
        setA(JSON.parse(localStorage.getItem('login')))
    }, [])

    return (
        <>
            <Navbar />
            { a && a.type === "Lawer" ?
                <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                    <div style={{ width: "50%" }}>
                        <form onSubmit={handleSubmit}>
                            <Input
                                type='text'
                                placeholder='title'
                                name='title'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                            <Input
                                type='text'
                                placeholder='name'
                                name='name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <Input
                                type='text'
                                placeholder='CNIC'
                                name='cnic'
                                value={cnic}
                                onChange={(e) => setCnic(e.target.value)}
                            />
                            <Input
                                type='text'
                                placeholder='address'
                                name='address'
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                            <Input
                                type='date'
                                placeholder='Date'
                                name='date'
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                            />
                            <Input
                                type='text'
                                placeholder='phone'
                                name='phone'
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                            <Input
                                type='file'
                                placeholder='Case File'
                                name='case'
                                onChange={(e) => handleFile(e.target.files[0])}
                            /> <button
                                // disabled={this.validate() || isProcessing}
                                className='login-btn continue-to-shipping'
                            >
                                Submit
                </button></form>
                    </div></div>
                : <div style={{ textAlign: "center" }}>Please Login First as a Lawer</div>}


            <Footer />
        </>
    );
}

export default FileCase;