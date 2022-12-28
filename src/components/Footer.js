import React from "react";

const Footer = () => {
    return(
        <div>
           <div className="card text-center" style={{backgroundColor: '#F0F8FF',marginTop:'32px'}}>
              <div className="card-header" style={{color:'black'}}>
                  Featured
           </div>
                <div className="card-body">
                   <h5 className="card-title"  style={{color:'black'}}>Special title treatment</h5>
                    <p className="card-text"  style={{color:'black'}}>With supporting text below as a natural lead-in to additional content.</p>
                    <a href='https://github.com/Saurabhkmahajan' className="btn btn-primary" style={{color:'black'}}>Go somewhere</a>
              </div>
                <div className="card-footer text-muted">
                  2 days ago
              </div>
           </div>    
        </div>
    );
};

  export default Footer;