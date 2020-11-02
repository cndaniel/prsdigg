import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ArticleNewPage from './pages/ArticleNewPage/ArticleNewPage';
import ArticlePage from './pages/ArticlePage/ArticlePage';
import FairPage from './pages/FairPage/FairPage';
import HomePage from './pages/HomePage/HomePage';
import MinePage from './pages/MinePage/MinePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import RulesPage from './pages/RulesPage/RulesPage';

export default function Routes() {
  return (
    <React.Fragment>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/articles/new' exact>
          <ArticleNewPage />
        </Route>
        <Route path='/articles/:uuid' exact>
          <ArticlePage />
        </Route>
        <Route path='/rules' exact>
          <RulesPage />
        </Route>
        <Route path='/mine' exact>
          <MinePage />
        </Route>
        <Route path='/fair' exact>
          <FairPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </React.Fragment>
  );
}
