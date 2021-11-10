import { Search } from '.';
import { screen } from '@testing-library/react';

describe('Search', () => {

    test('it renders a message if receiving an error', () => {
        let initState = { error: "Oops" }
        renderWithReduxProvider(<Search />, { initState });
        let error = screen.getByRole('alert')
        expect(error.textContent).toContain("Oops");
    });
});
