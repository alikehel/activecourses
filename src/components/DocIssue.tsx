import { useLocation } from '@docusaurus/router';
import React from 'react';

export default function DocIssue() {
  const location = useLocation();

  return (
    <p style={{ paddingLeft: '20px', marginTop: '30px' }}>
      Is something broken?{' '}
      <a
        href={`https://github.com/alikehel/activecourses/issues/new?template=docs_feedback.yml&page-url=https://www.activecourses.tech${location.pathname}`}
      >
        Please open an issue!
      </a>
    </p>
  );
}
