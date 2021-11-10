import { screen } from '@testing-library/react';
import { Footer } from '.';

describe('Footer', () => {
    beforeEach(() => {
        render(<Footer />);
    })

    test('shows the copyright logo and futureproof name', () => {
        const content = screen.queryByText(/© futureproof/i);
        expect(content).toBeInTheDocument();
    })
})