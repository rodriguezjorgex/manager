import angular from 'angular';
import '@ovh-ux/manager-core';
import '@ovh-ux/ng-ui-router-breadcrumb';
import '@uirouter/angularjs';
import 'angular-translate';

import { OnboardingLayoutHelper } from '@ovh-ux/manager-ng-layout-helpers';

import component from './component';
import routing from './routing';

const moduleName = 'ovhManagerOctaviaLoadBalancerOnboarding';

angular
  .module(moduleName, [
    'ngUiRouterBreadcrumb',
    'ovhManagerCore',
    'pascalprecht.translate',
    'ui.router',
    OnboardingLayoutHelper,
  ])
  .config(routing)
  .component('octaviaLoadBalancerOnboarding', component)
  .run(/* @ngTranslationsInject:json ./translations */);

export default moduleName;
