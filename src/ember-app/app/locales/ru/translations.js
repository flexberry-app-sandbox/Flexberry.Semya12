import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Semya12',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Semya12',
          title: 'Semya12'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-semya12-контроллер-l': IISSemya12КонтроллерLForm,
    'i-i-s-semya12-темпа-устан-l': IISSemya12ТемпаУстанLForm,
    'i-i-s-semya12-контроллер-e': IISSemya12КонтроллерEForm,
    'i-i-s-semya12-темпа-устан-e': IISSemya12ТемпаУстанEForm
  },

});

export default translations;
