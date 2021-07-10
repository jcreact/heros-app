import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import { AuthContext } from '../auth/AuthContext';

// Componente a probar
import { HomeRoutes } from './HomeRoutes';

describe(`Pruebas en el componente 'HomeRoutes.jsx'.`, () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: { logged: true, name: 'José' }
    };

    test('Debe renderizar el componente correctamente', () => {
        const component = mount(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <HomeRoutes />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(component).toMatchSnapshot();
        expect(component.find('header').exists()).toBeTruthy();
        expect(component.find('h6.MuiTypography-root').at(0).text()).toBe('Asociaciones');
        expect(component.find('h6.MuiTypography-root').at(1).text()).toBe('José');
        expect(component.find('a[href="/marvel"]').exists()).toBeTruthy();
        expect(component.find('a[href="/dc"]').exists()).toBeTruthy();
        expect(component.find('a[href="/search"]').exists()).toBeTruthy();
    });

});
