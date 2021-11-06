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
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());

    const requestOptions = {
        method: 'POST',
        headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json' },
        body: {"title":"Story About my Dogs","username":"kn0thing","content":"So the other day"}
    };
    const response = await fetch(url, requestOptions);
    const results = await gatherResponse(response);
    
    return new Response(results, requestOptions);
        // .then(async response => {
        //   return new Response(response.json(), { status: 200 })
        // })
        // .catch(error => {
        //   return Response("Not found", { status: 404 })
        // });
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
            <button type="submit" onClick={this.handleSubmit}>Create Your Post!</button>
          </div>  
          <div>
            <h2><center><Link to={`/`}>Go Back</Link></center></h2> 
          </div>
        </form>
      </div>
    );
  }
}
