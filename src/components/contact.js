
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
class Contact extends React.Component {
constructor(props) {
        super(props);
        this.state = {users: []};
        this.headers = [
            { key: 'id', label: 'Id'},
            { key: 'name', label: 'Name' },
            { key: 'email', label: 'Email' },
            { key: 'destination', label: 'Destination' },
            { key: 'nombrepersonnes', label: 'Nombrepersonnes' },
            { key: 'Date_reservation', label: 'Date_reservation' }
            ];    
            
        this.deleteContact = this.deleteContact.bind(this);
    }
    componentDidMount() {
        const url ='http://localhost/react/fich.php'
        axios.get(url).then(response => response.data)
        .then((data) => {
          this.setState({ users: data })
          console.log(this.state.users)
         })
      }
      deleteContact(id, event) { //alert(id)
        event.preventDefault();
        if(window.confirm("Are you sure want to delete?")) {
            axios({
                method: 'post',
                url: 'http://localhost/react/fich.php/?delete=' + id
            })
            .then(function (response) {
                //handle success
                console.log(response)
                if(response.status === 200) {
                    alert("Website deleted successfully");
                }
            })
            .catch(function (response) {
                //handle error
                console.log(response)
            });
        }
      }    
      render() {
        return (
            <div className="container"><h1>Table des données (CRUD) des voyageurs </h1>
            <p><Link to="/create" className="btn btn-primary btn-xs">Ajouter voyageur</Link> </p>
            <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                        {
                            this.headers.map(function(h) {
                                return (
                                    <th key = {h.key}>{h.label}</th>
                                )
                            })
                        }
                          <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.users.map(function(item, key) {
                            return (
                                <tr key = {key}>
                                  <td>{item.id}</td>
                                  <td>{item.name}</td>
                                  <td>{item.email}</td>
                    <td>{item.destination}</td>
                    <td>{item.nombrepersonnes}</td>
                    <td>{item.Date_reservation}</td>
                                  <td>
                    <Link to={`/update/${item.id}`} className="btn btn-primary btn-xs">Modifier</Link>
                       
                    <Link to="#" onClick={this.deleteContact.bind(this, item.id)} className="btn btn-danger btn-xs">Supprimer</Link>
                                  </td>
                                </tr>)
                            }.bind(this))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
 
export default Contact;



