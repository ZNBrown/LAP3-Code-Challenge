import { City } from '.';
import { queryByAttribute, screen } from '@testing-library/react';

import axios from 'axios';
jest.mock('axios')

axios.get.mockResolvedValue({
    data: {
        results: {
            "sunrise": "5:39:13 AM",
            "sunset": "5:48:27 PM",
        }
    }
})


describe('City', () => {
    let testCity = {
        name: 'Null Island',
        tz: 'Fake TZ',
        lat: 123,
        long: 456
    }

    beforeEach(() => jest.resetAllMocks() )

    test('it requests the times data on mount', async () => {
        const initState = { date: new Date("November 8, 2021") };
        renderWithReduxProvider(<City data={testCity} />, { initState });
        expect(axios.get).toHaveBeenCalledTimes(1)
        expect(axios.get).toHaveBeenCalledWith(expect.stringMatching(/123.*456.*2021-10.*/i))
    });

    test('it shows the time on a successful request', async () => {
        const initState = { date: new Date("November 8, 2021") };
        renderWithReduxProvider(<City data={testCity} />, { initState });
        let sunrise = screen.queryByLabelText("sunrise time")
        expect(sunrise).toBeInTheDocument()
    });

});