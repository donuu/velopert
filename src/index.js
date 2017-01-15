import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';

const rootElement = document.getElementById('root');
ReactDom.render(<App
                    headerTitle='welcome'
                    contentTitle='222'
                    contentBody='welcome to my first App'
                    />, rootElement);
