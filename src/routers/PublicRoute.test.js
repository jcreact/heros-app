import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

// Componente a probar
import { PublicRoute } from './PublicRoute';


describe(`Pruebas en el componente 'PublicRoute.jsx'.`, () => {

    test(`Debe renderizar el componente si no está autenticado.`, () => {
        const component = mount(
            <MemoryRouter>
                <PublicRoute
                    isAuth={false}
                    component={() => <span>Listo</span>}
                />
            </MemoryRouter>
        );
        expect(component.find('span').exists()).toBeTruthy();
    });
});
