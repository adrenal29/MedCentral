import React from 'react'
import '../components-css/workflow.css';
export default function Workflow() {
    return (
        <>
         <h2 className="work">How <span>MedCentral</span> Works</h2>  
         <div className="wrapper">
         <div className="center-line"></div>
             <div className="row row-1">
                 <section>
                 
                     <div className="details">
                         <span className="title">Clinical Consultation</span>
                         
                     </div>
                     <p>The user first consult the doctor for prescription and necessary advice given by the doctor is stored on the decentralized network which is visible to the Hospital as well as patient</p>
                
                 </section>

             </div> 
             <div className="row row-2">
                 <section>
                     <div className="details">
                         <span className="title">Buying Phase</span>
                         
                     </div>
                     <p>User then compare prices on MedShopi and choose best price</p>
               
                 </section>
             </div>
             <div className="row row-3">
                 <section>
                     <div className="details">
                         <span className="title">Transaction Phase</span>
                         
                     </div>
                     <p> Before transaction prescription matched with Hospital which results in no inconsistency</p>
                 
                 </section>

             </div>
             <div className="row row-4">
                 <section>
                     <div className="details">
                         <span className="title">Secure Transaction</span>
                         
                     </div>
                     <p> Post all the above steps transaction is completed generating a receipt stored on our network </p>
                 
                 </section>
            </div>
            <div className="row row-5">
                 <section>
                     <div className="details">
                         <span className="title">Consultation</span>
                         
                     </div>
                     <p> Once your transaction is completed MedCentral keeps your track and remind for future prescriptions and health reports</p>
                 
                 </section>

             </div>
         </div> 
        </>
    )
}
