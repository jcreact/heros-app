# React Gif App

Aplicación sencilla en React para entender las rutas:

## Scripts

### `npm start`

Ejecuta la aplicación en modo de desarrollo. El URL de la aplicación es [http://localhost:3000](http://localhost:3000).

### `npm test`

Se utiliza Enzyme para las pruebas, y los paquetes utilizados son los siguientes:

-   `enzyme`
-   `@wojtekmaj/enzyme-adapter-react-17`
-   `enzyme-to-json`
-   `@testing-library/react-hooks`

Configuración en `src/setupTests.js`

```javascript
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { createSerializer } from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({ mode: 'deep' }));
```

### `npm run build-pages`

Genera la aplicación en la carpeta `docs` para que sea desplegada en `GitHub Pages`.

**Nota**: Adicionalmente se configura en el `package.json` para los enlaces relativos:

```json
{
    ...
    "homepage": "./"
    ...
}
```

### Resoluciones de paquetes (npm audit)

`npx npm-force-resolutions`

Y en el `package.json` agregar el atributo `resolutions` con los paquetes, para este proyecto:

```json
"resolutions": {
    "normalize-url": "^4.5.1",
    "css-what": "^5.0.1",
    "glob-parent": "^5.1.2",
    "browserslist": "^4.16.5"
}
```
