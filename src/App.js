import React, {Suspense} from 'react';
import './App.css';
import HeaderComponent from './components/HeaderComponent';

const LandingComponent = React.lazy(() => import('./components/LandingComponent'));
const HomeComponent = React.lazy(() => import('./components/HomeComponent'));
const UsefulComponent = React.lazy(() => import('./components/UsefulComponent'));
const FeaturesComponent = React.lazy(() => import('./components/FeaturesComponent'));
const TemplateComponent = React.lazy(() => import('./components/TemplateComponent'));
const FooterComponent = React.lazy(() => import('./components/FooterComponent'))


function App() {
  return (
    <section className="App">
      <Suspense fallback={null}>
        <HeaderComponent />
        <LandingComponent />
        <HomeComponent/>
        <UsefulComponent />
        <FeaturesComponent />
        <TemplateComponent />
        <FooterComponent />
      </Suspense>
    </section>
  );
}

export default App;
