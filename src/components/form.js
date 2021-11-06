import React from 'react';
import { Link } from "@reach/router";

export default class FormSubmission extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async handleSubmit(event) {
    event.preventDefault();
    
    const url = 'https://serverless-api.30yyds.workers.dev/api/create-posts';
    const formData = new FormData(event.target);
    const body = JSON.stringify(Object.fromEntries(formData));

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: body
    };
    
    fetch(url, requestOptions)
        .then(response => {
          try {
            if (response.ok) {
              return response.clone().json()
            } else {
              throw new Error(response)
            }
          } catch (error) {
            return error
          }
        })
        .catch(function (error) {
          console.error(error);
          return error
        });

    // return new Response(response);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)} align="center">
          <label htmlFor="title" className="block text-sm font-medium text-warm-gray-900">
            <h2><center>Title</center></h2>
          </label>
          <input border="solid 1px black" type="text" name="title" id="title" placeholder="Enter title" />
          <label htmlFor="username" className="block text-sm font-medium text-warm-gray-900">
            <h2><center>Username</center></h2>
          </label>
          <input border="solid 1px black" type="text" name="username" id="username" placeholder="Enter author name"/>
          <label htmlFor="content" className="block text-sm font-medium text-warm-gray-900">
            <h2><center>Content</center></h2>
          </label>
          <textarea
            id="content"
            name="content"
            rows="20" cols="100"
            border="solid 1px black"
            text-align="justify"
            text-align-last="center"
            placeholder="Please write something here."
            required
            defaultValue={''}
          />
          <div>
            <button type="submit">Create Your Post!</button>
          </div>  
          <div>
            <h2><center><Link to={`/`}>Go Back</Link></center></h2> 
          </div>
        </form>
      </div>
    );
  }
}
