import React from 'react';

export default class FormSubmission extends React.Component {

  render() {
    return  (
      <div>
        <form action="https://serverless-api.30yyds.workers.dev/api/posts/" method="POST">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-warm-gray-900">
              Title
            </label>
            <div className="mt-1">
              <input
                type="text"
                className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="flex justify-between">
              <label htmlFor="content" className="block text-sm font-medium text-warm-gray-900">
                Post Content
              </label>
              <span id="message-max" className="text-sm text-warm-gray-500">
                Max. 500 characters
              </span>
            </div>
            <div className="mt-1">
              <textarea
                id="content"
                name="content"
                rows={4}
                className="py-3 px-4 block w-full shadow-sm text-warm-gray-900 focus:ring-teal-500 focus:border-teal-500 border-warm-gray-300 rounded-md"
                aria-describedby="content-max"
                placeholder="Please write something here."
                required
                defaultValue={''}
              />
            </div>
          </div>
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
