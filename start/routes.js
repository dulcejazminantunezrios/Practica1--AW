'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')


Route.get('read','ArtistaController.read')
Route.post('create','ArtistaController.create').middleware(['edad'])
Route.delete('delete','ArtistaController.delete')
Route.put('update','ArtistaController.update').middleware(['edad'])



