import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";

export default class FormSubmission extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async handleSubmit(event) {
    event.preventDefault();
    
    const url = 'https://sarahju.30yyds.workers.dev/api/create-posts';
    const formData = new FormData(event.target);
    const body = JSON.stringify(Object.fromEntries(formData));

    const requestOptions = {
        method: 'OPTIONS',
        mode: 'no-cors',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Request-Headers': 'Content-Type',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS, POST',
        },
        body: body
    };
    
    fetch(url, requestOptions)
        .then(response => {
          console.debug(response);
          return new Response(response, {requestOptions});
        })
        .catch(error => {
          console.error(error);
          return new Error(error, {requestOptions});
        });

    return new Response("Successfully created post!", {requestOptions});
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
