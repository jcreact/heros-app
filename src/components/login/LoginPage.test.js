import { mount } from 'enzyme';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

// Componente a probar.
import { LoginPage } from './LoginPage';

describe(`Pruebas en el componente 'LoginPage.jsx'.`, () => {

    const contextValue = {
        dispatch: jest.fn()
    };

    const history = {
        replace: jest.fn()
    };



    const component = mount(
        <AuthContext.Provider value={contextValue}>
            <LoginPage history={history} />
        </AuthContext.Provider>
    );

    test(`Debe renderizar el componente correctamente.`, () => {
        expect(component).toMatchSnapshot();
    });

    test(`Debe hacer el dispatch (login) y hacer el replace al '/'.`, () => {

        const action = {
            type: types.login,
            payload: {
                logged: true,
                name: 'José Palma'
            }
        };

        component.find('form').prop('onSubmit')({ preventDefault() { } });
        expect(contextValue.dispatch).toHaveBeenCalledWith(action);
        expect(history.replace).toHaveBeenCalledWith('/');
    });

    test(`Debe hacer el replace al '/dc'.`, () => {

        localStorage.setItem('lastPath', '/dc');
        const component = mount(
            <AuthContext.Provider value={contextValue}>
                <LoginPage history={history} />
            </AuthContext.Provider>
        );

        component.find('form').prop('onSubmit')({ preventDefault() { } });
        expect(history.replace).toHaveBeenCalledWith('/dc');

    });
});
