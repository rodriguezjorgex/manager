import bareMetalCloud from './services/bareMetalCloud';
import hostedPrivateCloud from './services/hostedPrivateCloud';
import publicCloud from './services/publicCloud';
import webCloud from './services/webCloud';
import network from './services/network';
import telecom from './services/telecom';

export default {
  id: 'home',
  translation: 'sidebar_home',
  routing: {
    application: 'hub',
    hash: '#/',
  },
  count: false,
  children: [
    bareMetalCloud,
    hostedPrivateCloud,
    publicCloud,
    webCloud,
    network,
    telecom,
    {
      id: 'sunrise',
      translation: 'sidebar_sunrise',
      routing: {
        application: 'sunrise',
      },
      count: false,
      features: ['sunrise'],
      separator: true,
    },
    {
      id: 'account',
      translation: 'sidebar_account',
      count: false,
      children: [
        {
          id: 'account_profile',
          translation: 'sidebar_account_profile',
          routing: {
            application: 'dedicated',
            hash: '#/useraccount/dashboard',
          },
          count: false,
        },
        {
          id: 'account_contacts',
          translation: 'sidebar_account_contacts',
          routing: {
            application: 'dedicated',
            hash: '#/contacts/services',
          },
          count: false,
        },
      ],
    },
    {
      id: 'billing',
      translation: 'sidebar_billing',
      count: false,
      idAttr: 'sidebar-link-billing',
      children: [
        {
          id: 'billing_services',
          translation: 'sidebar_billing_services',
          routing: {
            application: 'dedicated',
            hash: '#/billing/autorenew',
          },
          count: false,
        },
        {
          id: 'billing_bills',
          translation: 'sidebar_billing_bills',
          routing: {
            application: 'dedicated',
            hash: '#/billing/history',
          },
          count: false,
        },
        {
          id: 'billing_payment',
          translation: 'sidebar_billing_payment',
          routing: {
            application: 'dedicated',
            hash: '#/billing/payment/method',
          },
          count: false,
        },
      ],
    },
    {
      id: 'orders',
      translation: 'sidebar_orders',
      routing: {
        application: 'dedicated',
        hash: '#/billing/orders',
      },
      count: false,
    },
    {
      id: 'marketplace',
      translation: 'sidebar_marketplace',
      url: 'https://marketplace.ovhcloud.com/',
      isExternal: true,
      count: false,
      features: ['marketplace'],
    },
  ],
};
