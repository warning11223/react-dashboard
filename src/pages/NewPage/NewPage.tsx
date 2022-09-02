import React, {ChangeEvent, useState} from 'react';

import './NewPage.scss'
import Navbar from "../../components/Navbar/Navbar";
import {GrDocumentUpload} from "react-icons/gr";
import {Inputs} from "../../models/models";


type PropsType = {
    inputs1: Inputs[];
    inputs2: Inputs[];
    title: string;
}

const NewPage: React.FC<PropsType> = ({inputs1, inputs2, title}) => {
    const [file, setFile] = useState<any>('');

    const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) {
            return;
        } else {
            setFile(e.target.files[0])
        }
    }


    return (
        <div className="homeContainer">
            <Navbar />
            <div className='newPage'>
                <div className='newPage__title'>
                    {title}
                </div>
                <div className='newPage__item'>
                    <div className='newPage__item-one'>
                        <img src={file ? URL.createObjectURL(file) : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'} alt="image" className='newPage__item-img'/>
                    </div>
                    <form >
                        <div className='newPage__formInput-container'>
                            <div className='newPage__formInput-leftside'>
                                <div className='newPage__formInput' style={{marginBottom: '39px'}}>
                                    <label htmlFor="file" >
                                        <span>Upload: </span>
                                        <GrDocumentUpload className='newPage__formInput-icon' style={{cursor: 'pointer'}}/>
                                    </label>
                                    <input
                                        type="file"
                                        id='file'
                                        style={{display: 'none'}}
                                        onChange={uploadHandler}

                                    />
                                </div>
                                {inputs1.map(item => {
                                    return (
                                        <div key={item.id} className='newPage__formInput'>
                                            <label htmlFor="">{item.label}</label>
                                            <input type="text" placeholder={item.placeholder} className='newPage__formInput-input'/>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className='newPage__formInput-rightside'>
                                {inputs2.map(item => {
                                    return (
                                        <div key={item.id} className='newPage__formInput'>
                                            <label htmlFor="">{item.label}</label>
                                            <input type="text" placeholder={item.placeholder} className='newPage__formInput-input'/>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        <button type='submit' className='newPage__formInput-btn'>Send</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default NewPage;
