import React from 'react';
import { Link } from "@reach/router";

export default class FormSubmission extends React.Component {
  
  handleSubmit(event) => {
    event.preventDefault();

    const url = 'https://serverless-api.30yyds.workers.dev/api/create-posts'
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.state)
    };
    fetch(url, requestOptions)
        .then(response => console.log('Created post successfully'))
        .catch(error => console.log('Form submit error', error))
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label htmlFor="title" className="block text-sm font-medium text-warm-gray-900">
            <h2><center>Title</center></h2>
          </label>
          <input border="solid 1px black" type="text" name="title" id="title" />
          <label htmlFor="username" className="block text-sm font-medium text-warm-gray-900">
            <h2><center>Username</center></h2>
          </label>
          <input border="solid 1px black" type="text" name="username" id="username" />
          <label htmlFor="content" className="block text-sm font-medium text-warm-gray-900">
            <h2><center>Post Content</center></h2>
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
          <div style="width:800px; margin:0 auto;">
            <button type="submit">Create Your Post</button>
          </div>  
          <div>
            <h2><center><Link to={`/`}>Go Back</Link></center></h2> 
          </div>
        </form>
      </div>
    );
  }
}
