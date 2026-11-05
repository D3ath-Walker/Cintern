import { Component } from 'react';
import { CONTACT } from '../../data/siteLinks';
import './ErrorBoundary.css';

// React only supports catching render errors in a class component.
export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div className="error-fallback" role="alert">
        <h1>Something went wrong</h1>
        <p>
          Please refresh the page. If the problem continues, email{' '}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
        </p>
      </div>
    );
  }
}
