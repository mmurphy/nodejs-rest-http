'use strict';

/*
 *
 *  Copyright 2016-2017 Red Hat, Inc, and individual contributors.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', express.static(path.join(__dirname, 'public')));

app.use('/api/greeting', (request, response) => {
  const name = request.query ? request.query.name : undefined;
  response.send({ content: `Hello, ${name || 'World!'}` });
});

const books = [
  {"id":0,"title":"Book 0"},
  {"id":1,"title":"Book 1"},
  {"id":2,"title":"Book 2"},
];

app.get('/api/book', (request, response) => {
  const name = request.query ? request.query.name : undefined;
  response.send({ content: books });
});

app.get('/api/book/:id', (request, response) => {
  const bookId = request.params ? request.params.id : undefined;
  response.send({ content: books[bookId] });
});


module.exports = app;
