import React from 'react';
import { Link } from "@reach/router";

export default class FormSubmission extends React.Component {

  render() {
    return (
      <div>
        <form action="https://serverless-api.30yyds.workers.dev/api/create-posts" method="POST">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-warm-gray-900">
              <h2><center>Title</center></h2>
            </label>
            <div style="width:800px; margin:0 auto;">
              <input type="text" name="title" id="title" />
            </div>
          </div>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-warm-gray-900">
              <h2><center>Username</center></h2>
            </label>
            <div style="width:800px; margin:0 auto;">
              <input type="text" name="username" id="username" />
            </div>
          </div>
          <div className="sm:col-span-10">
            <div className="flex justify-between">
              <label htmlFor="content" className="block text-sm font-medium text-warm-gray-900">
                <h2><center>Post Content</center></h2>
              </label>
            </div>
            <div className="mt-1" style="width:800px; margin:0 auto;">
              <textarea
                id="content"
                name="content"
                rows={10}
                aria-describedby="content-max"
                placeholder="Please write something here."
                required
                defaultValue={''}
              />
            </div>
          </div>
          <button type="submit">
            Create Post
          </button>
        </form>
        <p>
          <Link to="/">Go back</Link>
        </p>
      </div>
    );
  }
}
