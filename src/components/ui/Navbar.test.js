import { mount } from 'enzyme';
import { MemoryRouter, Router } from 'react-router-dom';

import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

// Componente a probar
import { Navbar } from './Navbar';

describe(`Pruebas en el componente 'Navbar.jsx'.`, () => {

    const historyMock = {
        push: jest.fn(),
        replace: jest.fn(),
        location: {},
        listen: jest.fn(),
        createHref: jest.fn()
    };

    const contextValue = {
        dispatch: jest.fn(),
        user: { logged: true, name: 'Carlos' }
    };

    const component = mount(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter>
                <Router history={historyMock}>
                    <Navbar />
                </Router>
            </MemoryRouter>
        </AuthContext.Provider>
    );

    afterEach(() => jest.clearAllMocks());

    test('Debe renderizar el componente correctamente.', () => {
        expect(component).toMatchSnapshot();
        expect(component.find('header').exists()).toBeTruthy();
        expect(component.find('h6.MuiTypography-root').at(0).text()).toBe('Asociaciones');
        expect(component.find('h6.MuiTypography-root').at(1).text()).toBe('Carlos');
        expect(component.find('a[role="button"]').at(0).text()).toContain('Marvel');
        expect(component.find('a[role="button"]').at(1).text()).toContain('DC');
        expect(component.find('a[role="button"]').at(2).text()).toContain('buscar');

    });

    test(`Debe llamar el logout y usar el history`, () => {
        component.find('button').prop('onClick')();
        expect(contextValue.dispatch).toHaveBeenCalled();
        expect(contextValue.dispatch).toHaveBeenCalledWith({ type: types.logout });
        expect(historyMock.replace).toHaveBeenCalledWith('/login');
    });
});
