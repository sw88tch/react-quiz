import React from 'react'; 
import ReactDOM from 'react-dom/client'; 
import store from './redux/entries/store';
import { Provider } from 'react-redux';
import Quiz from './components/pages/Quiz'; 
import { QuizProvider } from './redux/reducers/quizReducer';
 
const root = ReactDOM.createRoot(document.getElementById('root')); 
 
root.render( 
  <React.StrictMode>
    <Provider store={store}>
      <QuizProvider> 
        <Quiz /> 
      </QuizProvider>
    </Provider>
  </React.StrictMode> 
);