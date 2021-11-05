import React from 'react';
import { Link } from "@reach/router";

export default class FormSubmission extends React.Component {

  render() {
    return (
      <div>
        <form action="https://serverless-api.30yyds.workers.dev/api/create-posts" method="POST">
          <label htmlFor="title" className="block text-sm font-medium text-warm-gray-900">
            <h2><center>Title</center></h2>
          </label>
          <input class="center-block" type="text" required name="title" id="title" />
          <label htmlFor="username" className="block text-sm font-medium text-warm-gray-900">
            <h2><center>Username</center></h2>
          </label>
          <input class="center-block" type="text" required name="username" id="username" />
          <label htmlFor="content" className="block text-sm font-medium text-warm-gray-900">
            <h2><center>Post Content</center></h2>
          </label>
          <textarea
            id="content"
            name="content"
            rows="10"
            text-align="justify"
            text-align-last="center"
            placeholder="Please write something here."
            required
            defaultValue={''}
          />
          <button type="submit">Create Your Post</button>
        </form>
        <div style="margin-top:10px">
          <p>
            <Link to="/">Go back</Link>
          </p> 
        </div>
      </div>
    );
  }
}
