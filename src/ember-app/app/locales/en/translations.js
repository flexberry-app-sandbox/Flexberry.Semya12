import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISSemya12КонтроллерLForm from './forms/i-i-s-semya12-контроллер-l';
import IISSemya12ТемпаУстанLForm from './forms/i-i-s-semya12-темпа-устан-l';
import IISSemya12КонтроллерEForm from './forms/i-i-s-semya12-контроллер-e';
import IISSemya12ТемпаУстанEForm from './forms/i-i-s-semya12-темпа-устан-e';
import IISSemya12ДатчикModel from './models/i-i-s-semya12-датчик';
import IISSemya12КонтроллерModel from './models/i-i-s-semya12-контроллер';
import IISSemya12ТемпаУстанModel from './models/i-i-s-semya12-темпа-устан';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-semya12-датчик': IISSemya12ДатчикModel,
    'i-i-s-semya12-контроллер': IISSemya12КонтроллерModel,
    'i-i-s-semya12-темпа-устан': IISSemya12ТемпаУстанModel
  },

  'application-name': 'Semya12',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Semya12',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Semya12',
          title: 'Semya12'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        semya12: {
          caption: 'Semya12',
          title: 'Semya12',
          'i-i-s-semya12-контроллер-l': {
            caption: 'Контроллер',
            title: ''
          },
          'i-i-s-semya12-темпа-устан-l': {
            caption: 'Темпа устан',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-semya12-контроллер-l': IISSemya12КонтроллерLForm,
    'i-i-s-semya12-темпа-устан-l': IISSemya12ТемпаУстанLForm,
    'i-i-s-semya12-контроллер-e': IISSemya12КонтроллерEForm,
    'i-i-s-semya12-темпа-устан-e': IISSemya12ТемпаУстанEForm
  },

});

export default translations;
