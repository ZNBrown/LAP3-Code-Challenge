import { Result } from '.';
import { screen } from '@testing-library/react';

describe('Result', () => {
    test('it shows the formatted date', async () => {
        const initState = { cities: [], isLoading: false, date: new Date("November 9, 2021")};
        renderWithReduxProvider(<Result />, { initState });
        const displayDate = screen.getByText("Tuesday, November 9, 2021");
        expect(displayDate).toBeInTheDocument();
    });
});