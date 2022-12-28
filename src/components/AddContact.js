import React from "react";

class AddContact extends React.Component {

    state = {
      name: '',
      email: '',
    };

    add = (e) => {
      e.preventDefault();
      if(this.state.name === "" || this.state.email === "") {
        alert("All the fields are mandatory!");
      }
      this.props.addContactHandler(this.state);
      this.setState({ name:"", email: ""});
    }
   render() {
      return (
          <div className="ui main">  
            <h1 style={{paddingTop:'60px'}}>Add Contact</h1>
            <form className="ui form" onSubmit={this.add}>
              <div className="field">
                <label>Name</label>
                <input type="text" 
                name="name" 
                placeholder="Name" 
                value={this.state.name}
                onChange={ (e) => this.setState({name: e.target.value})} />
              </div>

              <div className="field">
                <label>Email</label>
                <input type="text" 
                name="email" 
                placeholder="Email" 
                value={this.state.email}
                onChange={ (e) => this.setState({email: e.target.value})} />
                </div>
                <button className="ui button red">Add</button>
            </form> 
          </div>  
    );
   }
};

  export default AddContact;