import { mount } from 'enzyme';
import { MemoryRouter, Route } from 'react-router-dom';

// Com
import { HeroPage } from './HeroPage';


describe(`Pruebas en el componente 'HeroPage.jsx'.`, () => {

    const history = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn()
    };

    test(`Debe mostrar el componente 'Redirect' si no hay argumentos en el URL.`, () => {
        const component = mount(
            <MemoryRouter initialEntries={['/hero']}>
                <HeroPage history={history} />
            </MemoryRouter>
        );

        expect(component.find('Redirect').exists()).toBeTruthy();
    });

    test(`Debe mostrar a Superman.`, () => {
        const component = mount(
            <MemoryRouter initialEntries={['/hero/dc-superman']}>
                <Route path="/hero/:id" component={HeroPage} />
            </MemoryRouter>
        );

        expect(component).toMatchSnapshot();
        expect(component.find('span').at(0).text()).toBe('Superman');
        expect(component.find('span').at(1).text()).toBe('DC Comics');
        expect(component.find('h5.MuiTypography-h5').at(0).text()).toContain('Kal-El');
        expect(component.find('h5.MuiTypography-h5').at(1).text()).toContain('Action Comics #1');
    });

    test(`Debe regresar a la página anterior '/dc' con push().`, () => {
        const history = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn()
        };
        const component = mount(
            <MemoryRouter initialEntries={['/hero/dc-superman']}>
                <Route
                    path="/hero/:id"
                    component={() => <HeroPage history={history} />} />
            </MemoryRouter>
        );

        component.find('button').prop('onClick')();
        expect(history.push).toHaveBeenCalledWith('/dc');
        expect(history.goBack).not.toHaveBeenCalled();
    });

    test(`Debe regresar a la página anterior con goBack().`, () => {

        const component = mount(
            <MemoryRouter initialEntries={['/hero/dc-superman']}>
                <Route
                    path="/hero/:id"
                    component={() => <HeroPage history={history} />} />
            </MemoryRouter>
        );

        component.find('button').prop('onClick')();
        expect(history.goBack).toHaveBeenCalledWith();
        expect(history.push).toHaveBeenCalledTimes(0);
    });

    test(`Debe llamar el Redirect si el id no existe.`, () => {

        const component = mount(
            <MemoryRouter initialEntries={['/hero/mock-hero']}>
                <Route
                    path="/hero/:id"
                    component={() => <HeroPage history={history} />} />
            </MemoryRouter>
        );

        expect(component).toMatchSnapshot();
        expect(component.text()).toBe('');
    });
});
