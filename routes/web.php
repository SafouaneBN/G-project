<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\UserController;

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

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', function () {
    return view('pages.Home');
});

Route::group(['prefix' => 'project' ],function () {
    Route::get('/index',[ProjectController::class, "index"])->name('project.index');
    Route::get('/task',[ProjectController::class, "task"])->name('project.task');
    Route::get('/timesheet',[ProjectController::class, "timesheet"])->name('project.timesheet');
    Route::get('/team_leader',[ProjectController::class, "team_leader"])->name('project.team_leader');
});

Route::group(['prefix' => 'client' ],function () {
    Route::get('/index',[ClientController::class, "index"])->name('client.index');
});
Route::group(['prefix' => 'user' ],function () {
    Route::get('/index',[UserController::class, "index"])->name('user.index');
});



Auth::routes();
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
