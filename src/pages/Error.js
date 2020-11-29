import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <section className="error-page section">
      <h1 className="section-title"><span> 404 </span>Page Not Found <span>:{"("}</span></h1>
      <Link to="/" className="btn btn-primary">Back Home</Link>
    </section>
  )
}

export default Error;
