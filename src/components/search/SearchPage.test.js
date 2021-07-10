import { MemoryRouter, Route } from 'react-router-dom';
import { mount } from 'enzyme';
import { SearchPage } from './SearchPage';
import { act } from 'react-dom/test-utils';

describe(`Pruebas en el componente 'SearchPage.jsx'.`, () => {

    const history = {
        push: jest.fn()
    };

    test('Debe renderizar el componente correctamente.', () => {
        const component = mount(
            <MemoryRouter initialEntries={['/search']}>
                <Route path="/search" component={() => <SearchPage history={history} />} />
            </MemoryRouter>
        );

        expect(component).toMatchSnapshot();
        expect(component.find('input').exists()).toBeTruthy();
        expect(component.find('label').exists()).toBeTruthy();
        expect(component.find('h5').exists()).toBe(false);
    });


    test(`Debe a 'Flash' y el valor del input debe ser 'flash'.`, () => {
        const component = mount(
            <MemoryRouter initialEntries={['/search?q=flash']}>
                <Route path="/search" component={() => <SearchPage history={history} />} />
            </MemoryRouter>
        );

        expect(component).toMatchSnapshot();
        expect(component.find('input').prop('value')).toBe('flash');
        expect(component.find('h5').text()).toBe('Resultados');
        expect(component.find('div.MuiGrid-item').exists()).toBeTruthy();
        expect(component.find('div.MuiAvatar-root').text()).toBe('F');
        expect(component.find('img[title="Flash"]').exists()).toBeTruthy();
    });


    test(`No bebe de mostrar ningún resultado si q es 'hero-mock'.`, () => {
        const component = mount(
            <MemoryRouter initialEntries={['/search?q=hero-mock']}>
                <Route path="/search" component={() => <SearchPage history={history} />} />
            </MemoryRouter>
        );

        expect(component).toMatchSnapshot();
        expect(component.find('input').prop('value')).toBe('hero-mock');
        expect(component.find('h5').text()).toBe('No se encontraron coincidencias...');
    });

    test(`Debe realizar la búsqueda para batmap.`, () => {

        const component = mount(
            <MemoryRouter initialEntries={['/search']}>
                <Route path="/search" component={() => <SearchPage history={history} />} />
            </MemoryRouter>
        );

        // act(() => {
        //     component.find('input').prop('onChange')({ target: { value: 'batman' } });
        // });
        // component.update();

        component.find('input').simulate('change', { target: { value: 'batman' } });
        component.find('form').prop('onSubmit')({
            preventDefault() { }
        });

        expect(component.find('input').prop('value')).toBe('batman');
        expect(history.push).toHaveBeenCalledWith('?q=batman');
    });

});
