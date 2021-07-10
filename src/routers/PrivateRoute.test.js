import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

// Componente a probar
import { PrivateRoute } from './PrivateRoute';


describe(`Pruebas en 'PrivateRoute.jsx'.`, () => {

    const props = {
        location: {
            pathname: '/dc',
            search: ''
        }
    };

    Storage.prototype.setItem = jest.fn();

    test(`Debe renderizar el componente si está autenticado.`, () => {
        const component = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuth={true}
                    component={() => <span>Listo</span>}
                    {...props}
                />
            </MemoryRouter>
        );
        expect(component.find('span').exists()).toBeTruthy();
    });

    test(`Debe guardar el 'lastPath' en el localStorage.`, () => {
        mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuth={true}
                    component={() => <span>Listo</span>}
                    {...props}
                />
            </MemoryRouter>
        );
        expect(localStorage.setItem).toHaveBeenCalled();
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/dc');
    });

    test('No se debe renderizar el componente si no está autenticado.', () => {
        const component = mount(
            <MemoryRouter>
                <PrivateRoute
                    isAuth={false}
                    component={() => <span>Listo</span>}
                    {...props}
                />
            </MemoryRouter>
        );
        expect(component.find('span').exists()).toBeFalsy();
        expect(localStorage.setItem).toHaveBeenCalledWith('lastPath', '/dc');
    });


});
