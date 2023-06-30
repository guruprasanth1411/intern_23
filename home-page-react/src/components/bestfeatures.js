import React from "react";
import { Button, Card } from 'react-bootstrap';
import './index.css';

function BestFeatures() {
    return (
        <div id="features" className="best-features-bg mt-5 ml-auto mr-auto">
            <div className="best-features-heading-container mt-5 ml-auto mr-auto">
                <div className="best-features-title-card mt-5">
                    <h3 className="">Best Features</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, inventore dolores? Quae esse
                        numquam
                        voluptas harum odit enim hic et, magnam nesciunt nemo tempora aperiam excepturi, deserunt corporis
                        minus! Magni.</p>
                </div>
            </div>
            <div className="container d-flex flex-row justify-content-center">
                <div className="card col-3 pt-5 m-3" style={{ width: "15rem" }}>
                    <i className="fa-solid fa-bell fa-2x mb-3"></i>
                    <div className="card-body">
                        <h5 className="card-title">Notification Viewing</h5>
                        <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, inventore dolores? Quae esse
                            numquam</p>
                    </div>
                </div>
                <div className="card col-3 pt-5 m-3" style={{ width: "15rem" }}>
                <i class="fa-brands fa-creative-commons-zero fa-2x mb-3"></i>
                    <div className="card-body">
                        <h5 className="card-title">Notification Viewing</h5>
                        <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, inventore dolores? Quae esse
                            numquam</p>
                    </div>
                </div>
                <div className="card col-3 pt-5 m-3" style={{ width: "15rem" }}>
                <i class="fa-solid fa-calendar-days fa-2x mb-3"></i>
                    <div className="card-body">
                        <h5 className="card-title">Notification Viewing</h5>
                        <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, inventore dolores? Quae esse
                            numquam</p>
                    </div>
                </div>
            </div>
            <div className="container d-flex flex-row justify-content-center">
                <div className="card col-3 pt-5 m-3" style={{ width: "15rem" }}>
                <i class="fa-solid fa-video fa-2x mb-3"></i>
                    <div className="card-body">
                        <h5 className="card-title">Notification Viewing</h5>
                        <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, inventore dolores? Quae esse
                            numquam</p>
                    </div>
                </div>
                <div className="card col-3 pt-5 m-3" style={{ width: "15rem" }}>
                <i class="fa-solid fa-circle-notch fa-2x mb-3"></i>
                    <div className="card-body">
                        <h5 className="card-title">Notification Viewing</h5>
                        <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, inventore dolores? Quae esse
                            numquam</p>
                    </div>
                </div>
                <div className="card col-3 pt-5 m-3" style={{ width: "15rem" }}>
                <i class="fa-solid fa-heart fa-2x mb-3"></i>
                    <div className="card-body">
                        <h5 className="card-title">Notification Viewing</h5>
                        <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, inventore dolores? Quae esse
                            numquam</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BestFeatures;





// import React from "react";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import './index.css'


// function BestFeatures() {
//     return (
//         <div id="features" class="best-features-bg">
//         <div class="best-features-heading-container">
//             <div class="best-features-title-card mt-5">
//                 <h3>Best Features</h3>
//                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, inventore dolores? Quae esse
//                     numquam
//                     voluptas harum odit enim hic et, magnam nesciunt nemo tempora aperiam excepturi, deserunt corporis
//                     minus! Magni.</p>
//             </div>
//         </div>
//         <div class="container d-flex flex-row justify-content-center">
//             <div class="card col-3 pt-5 m-3" style="width: 15rem;">
//                 <i class="fa-solid fa-bell fa-2x mb-3"></i>
//                 <div class="card-body">
//                     <h5 class="card-title">Notification Viewing</h5>
//                     <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, inventore dolores? Quae esse
//                         numquam</p>
//                 </div>

//             </div>
//             <div class="card col-3 pt-5 m-3" style="width: 15rem;">
//                 <i class="fa-brands fa-creative-commons-zero fa-2x mb-3"></i>
//                 <div class="card-body">
//                     <h5 class="card-title">Creative Design</h5>
//                     <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, inventore dolores? Quae esse
//                         numquam
//                     </p>
//                 </div>

//             </div>
//             <div class="card col-3 pt-5 m-3" style="width: 15rem;">
//                 <i class="fa-solid fa-calendar-days fa-2x mb-3"></i>
//                 <div class="card-body">
//                     <h5 class="card-title">Clean Code</h5>
//                     <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, inventore dolores? Quae esse
//                         numquam</p>
//                 </div>

//             </div>
//         </div>
//         <div class="container d-flex flex-row justify-content-center">
//             <div class="card col-3 pt-5 m-3" style="width: 15rem;">
//                 <i class="fa-solid fa-video fa-2x mb-3"></i></i>
//                 <div class="card-body">
//                     <h5 class="card-title">Full Free Video Call</h5>
//                     <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, inventore dolores? Quae esse
//                         numquam</p>
//                 </div>
//             </div>
//             <div class="card col-3 pt-5 m-3" style="width: 15rem;">
//                 <i class="fa-solid fa-circle-notch fa-2x mb-3"></i>
//                 <div class="card-body">
//                     <h5 class="card-title">Greate Support</h5>
//                     <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, inventore dolores? Quae esse
//                         numquam
//                     </p>
//                 </div>
//             </div>
//             <div class="card col-3 pt-5 m-3" style="width: 15rem;">
//                 <i class="fa-solid fa-heart fa-2x mb-3"></i>
//                 <div class="card-body">
//                     <h5 class="card-title">Unlimitted Features</h5>
//                     <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, inventore dolores? Quae esse
//                         numquam</p>
//                 </div>
//             </div>
//         </div>
//     </div>
//     )
// }

// export default BestFeatures