import Homepage from './Pages/Homepage/Homepage';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import { canvas, homepage } from './routes';
import ErrorPage from './Shared/ErrorPage/ErrorPage';
import CanvasPage from './Pages/CanvasPage/CanvasPage';
import { Provider } from 'react-redux';
import store, { persistor } from './store';
import { ConfigProvider } from 'antd';
import { customTheme } from './customTheme';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  const router = createHashRouter([
    {
      path: homepage,
      element: <Homepage />,
      errorElement: <ErrorPage />
    },
    {
      path: canvas,
      element: <CanvasPage />,
      errorElement: <ErrorPage />

    }
  ]);

  return (
    <ConfigProvider theme={customTheme}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </ConfigProvider>
  );
}

export default App;
