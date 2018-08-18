import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import qs from 'query-string';
import Albums from './Albums';
import Paging from '../paging/Paging';
import { getAlbums } from '../../services/lastFmApi';

