import { types } from '../types/types';
import { authReducer } from './authReducer';


describe(`Pruebas en 'authReducer.js'`, () => {

    test('Debe retornar el estado por defecto.', () => {
        const state = authReducer({ logged: false }, {});
        expect(state).toEqual({ logged: false });
    });

    test('Debe de autenticar y colocar el nombre del usuario.', () => {

        const action = {
            type: types.login,
            payload: {
                name: 'José'
            }
        };
        const state = authReducer({ logged: false }, action);
        expect(state).toEqual({
            logged: true,
            name: 'José'
        });
    });

    test('Debe borrar el nombre del usuario y logged en false.', () => {
        const action = {
            type: types.logout,
        };
        const state = authReducer({ logged: true, name: 'José' }, action);

        expect(state).toEqual({ logged: false });
        expect(state).not.toHaveProperty('name');
    });


});
