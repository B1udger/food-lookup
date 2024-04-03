import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';

export function CustomSearchBar({ onSearch }) {
  return (
    <div>
      <InputGroup className="mb-3">
        <InputGroup.Text id="search-addon">
          <i className="bi bi-search" aria-hidden="true"></i>
        </InputGroup.Text>
        <Form.Control
          placeholder="Type to search..."
          aria-label="Type to search..."
          aria-describedby="search-addon"
          onChange={(e) => onSearch(e.target.value)}
        />
      </InputGroup>
    </div>
  );
}