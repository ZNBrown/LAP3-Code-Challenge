import { SearchForm } from '.';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('SearchForm', () => {
    let form, dateInput, submit;

    beforeEach(() => {
        renderWithReduxProvider(<SearchForm />);
        form = screen.getByRole('form');
        submit = screen.getByRole('button')
        dateInput = screen.getByLabelText('Date');
    });

    test('it renders a form', () => {
        expect(form).toBeInTheDocument();;
    });

    test('it disables submission when no date is input', () => {
        expect(submit.value).toBe("Select a date")
        expect(submit.disabled).toBe(true)
    })

    test('it disables submission when a future date is input', () => {
        userEvent.type(dateInput, "2025-09-11")
        expect(submit.value).toBe("Date cannot be in the future")
        expect(submit.disabled).toBe(true)
    })

    test('it enables submission when a valid date is input', () => {
        let dateInput = screen.getByLabelText('Date');
        let submit = screen.getByRole('button')
        userEvent.type(dateInput, "2020-09-11")
        expect(submit.value).toBe("Search")
        expect(submit.disabled).toBe(false)
    })

    test('it resets the form on submission', () => {
        userEvent.type(dateInput, "2021-09-11")
        userEvent.click(submit)
        expect(dateInput.value).toBe("")
    })

    test('it resets the form on submission', () => {
        userEvent.type(dateInput, "2021-09-11")
        userEvent.click(submit)
        expect(dateInput.value).toBe("")
    })
});