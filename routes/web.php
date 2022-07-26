<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\parametreController;
use App\Http\Controllers\StatutController;
use App\Http\Controllers\OpportuniteController;
use App\Http\Controllers\cat_projetController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', function () {
  //  return view('welcome');
//});

 Route::get('/', function () {
     return view('pages.Home');
 })->middleware('auth');

Route::group(['prefix' => 'project', "middleware" => "auth"  ],function () {
    Route::get('/index',[ProjectController::class, "index"])->name('project.index');
    Route::get('/task',[ProjectController::class, "task"])->name('project.task');
    Route::get('/timesheet',[ProjectController::class, "timesheet"])->name('project.timesheet');
    Route::get('/team_leader',[ProjectController::class, "team_leader"])->name('project.team_leader');
    Route::get('/index/cat_project',[cat_projetController::class, "index"])->name('cat_projet.index');
    Route::post('/cat_projetadd',[cat_projetController::class, "addcat_projet"])->name('parametre.addcat_projet');
    Route::get('/cat_projet/{id}/edit', [cat_projetController::class,"editcat_projet"]);
    Route::post('/cat_projet/update', [cat_projetController::class,"updatecat_projet"])->name('parametre.updatecat_projet');
    Route::post('/cat_projet/delete', [cat_projetController::class,"deletecat_projet"])->name('parametre.deletecat_projet');

});

Route::group(['prefix' => 'client', "middleware" => "auth"  ],function () {
    Route::get('/index',[ClientController::class, "index"])->name('client.index');
    Route::post('/addClient',[ClientController::class, "addClient"])->name('parametre.addClient');
    Route::get('/Client/{id}/edit', [ClientController::class,"editClient"]);
    Route::post('/Client/update', [ClientController::class,"updateClient"])->name('parametre.updateClient');
    Route::post('/Client/delete', [ClientController::class,"deleteClient"])->name('parametre.deleteClient');

});

Route::group(['prefix' => 'user' ],function () {
    Route::get('/index',[UserController::class, "index"])->name('user.index');
});

Route::group(['prefix' => 'parametre', "middleware" => "auth" ],function () {
    Route::get('/role',[parametreController::class, "role"])->name('parametre.role');
    Route::get('/statut',[StatutController::class, "statut"])->name('parametre.statut');

    Route::post('/addcat_Statut',[StatutController::class, "cat_addStatut"])->name('parametre.cat_addStatut');
    Route::get('/cat_statut/{id}/edit', [StatutController::class,"cat_edit"]);
    Route::post('/cat_statut/update', [StatutController::class,"cat_update"])->name('parametre.cat_update');
    Route::post('/cat_statut/delete', [StatutController::class,"cat_delete"])->name('parametre.cat_delete');

    Route::post('/addStatut',[StatutController::class, "addStatut"])->name('parametre.addStatut');
    Route::get('/statut/{id}/edit', [StatutController::class,"edit"]);
    Route::post('/statut/update', [StatutController::class,"update"])->name('parametre.update');
    Route::post('/statut/delete', [StatutController::class,"delete"])->name('parametre.delete');

    Route::post('/addrole',[parametreController::class, "addrole"])->name('parametre.addrole');
    Route::get('/role/{id}/edit', [parametreController::class,"editrole"]);
    Route::post('/role/update', [parametreController::class,"updaterole"])->name('parametre.updaterole');
    Route::post('/role/delete', [parametreController::class,"deleterole"])->name('parametre.deleterole');

});

Route::group(['prefix' => 'opportunite' ],function () {
    Route::get('/index',[OpportuniteController::class, "index"])->name('opportunite.index');
    Route::post('/addOpportunite',[OpportuniteController::class, "addOpportunite"])->name('parametre.addOpportunite');
    Route::get('/Opportunit/{id}/edit', [OpportuniteController::class,"editOpportunite"]);
    Route::post('/Opportunit/update', [OpportuniteController::class,"updateOpportunite"])->name('parametre.updateOpportunite');
    Route::post('/Opportunit/delete', [OpportuniteController::class,"deleteOpportunite"])->name('parametre.deleteOpportunite');

});

Auth::routes();
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
