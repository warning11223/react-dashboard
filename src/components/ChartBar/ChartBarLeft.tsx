import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './ChartBarLeft.scss'
import {BsThreeDotsVertical} from "react-icons/bs";
import ChangingProgressProvider from "./Changing";
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";

function Example(props: any) {
    return (
        <div style={{ marginBottom: 20, paddingLeft: '170px'}}>
            <div style={{ marginTop: 30, display: "flex", }}>
                <div style={{ width: "40%", paddingRight: 30 }}>{props.children}</div>
            </div>
        </div>
    );
}

const ChartBarLeft = () => {
    return (
        <div className='chartbar'>
            <div className="top">
                <h1>Total Revenue</h1>
                <BsThreeDotsVertical className='top__icon'/>
            </div>
            <div className="chartbar__bottom">
                <div className='chartbar__container'>
                    <Example>
                        <ChangingProgressProvider values={[0, 10, 20, 30, 40, 50, 60, 70]}>
                            {(percentage: any) => (
                                <CircularProgressbar value={percentage} text={`${percentage}%`} />
                            )}
                        </ChangingProgressProvider>
                    </Example>
                </div>
                <h2 className='chartbar__title'>Total sales made today</h2>
                <p className='chartbar__price'>$420</p>
                <p className='chartbar__text'>Previous transactions processing. Last payments may not be included.</p>
                <div className='chartbar__container2'>
                    <div>
                        <p className='chartbar__container-title '>Target</p>
                        <div className='chartbar__container-flex red'>
                            <IoIosArrowDown className='chartbar__container-icon'/>
                            <p>$12.4k</p>
                        </div>
                    </div>
                    <div>
                        <p className='chartbar__container-title'>Last week</p>
                        <div className='chartbar__container-flex green'>
                            <IoIosArrowUp className='chartbar__container-icon'/>
                            <p>$12.4k</p>
                        </div>
                    </div>
                    <div>
                        <p className='chartbar__container-title'>Last month</p>
                        <div className='chartbar__container-flex green'>
                            <IoIosArrowUp className='chartbar__container-icon'/>
                            <p>$12.4k</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChartBarLeft;
