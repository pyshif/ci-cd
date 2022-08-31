import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn ci\/cd/i);
    expect(linkElement).toBeInTheDocument();
});

it('should to render button element', () => {
    render(<App />);
    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
});
