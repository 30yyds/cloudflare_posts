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
          <input type="text" name="title" id="title" />
          <label htmlFor="username" className="block text-sm font-medium text-warm-gray-900">
            <h2><center>Username</center></h2>
          </label>
          <input type="text" name="username" id="username" />
          <label htmlFor="content" className="block text-sm font-medium text-warm-gray-900">
            <h2><center>Post Content</center></h2>
          </label>
          <textarea
            id="content"
            name="content"
            aria-describedby="content-max"
            placeholder="Please write something here."
            required
            defaultValue={''}
          />
          <button type="submit">Create Your Post</button>
        </form>
      </div>
    );
  }
}
