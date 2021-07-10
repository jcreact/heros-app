import { mount } from 'enzyme';
import { AuthContext } from '../auth/AuthContext';

// Componente a probar
import { AppRouter } from './AppRouter';


describe(`Pruebas en el componente 'AppRouter.jsx'.`, () => {

    const contextValue = {
        dispatch: jest.fn(),
        user: { logged: false }
    };

    test(`Debe renderizar la página de login si no está autenticado.`, () => {
        const component = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
            </AuthContext.Provider>
        );

        expect(component).toMatchSnapshot();
    });

    test(`Debe renderiza la página de marvel si está autenticado.`, () => {

        const contextValue = {
            dispatch: jest.fn(),
            user: { logged: true, name: 'José' }
        };

        const component = mount(
            <AuthContext.Provider value={contextValue}>
                <AppRouter />
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
