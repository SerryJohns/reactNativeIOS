/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 'use strict';

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import MainApp from './src/MainApp';
import ButtonEvent from './src/ButtonEvent';
import ListComponent from './src/ListComponent';
import TabsComponent from './src/TabsComponent';

AppRegistry.registerComponent('Bucketlist', () => TabsComponent);
