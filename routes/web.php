<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\parametreController;
use App\Http\Controllers\StatutController;
use App\Http\Controllers\OpportuniteController;
use App\Http\Controllers\cat_projetController;
use App\Http\Controllers\CatTacheController;
use App\Http\Controllers\TacheController;
use App\Http\Controllers\ActiviteController;
use App\Http\Controllers\CatLivrableController;
use App\Http\Controllers\ChartController;
use App\Http\Controllers\ChatController;



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

Route::get('/',[ChartController::class, "index"])->name('chart.index')->middleware(['auth','blockUser']);


Route::get('/evolution1',[ChartController::class, "evolution1"]);
Route::get('/countprojectstatu',[ChartController::class, "countprojectstatu"]);

Route::group(['prefix' => 'project', "middleware" => ["auth","blockUser"]  ],function () {
    Route::get('/index',[ProjectController::class, "index"])->middleware("roles:bothAE")->name('project.index');
    Route::post('/addprojet',[ProjectController::class, "addprojet"])->middleware("roles:admin")->name('parametre.addprojet');
    Route::get('/projet/{id}/edit', [ProjectController::class,"editprojet"]);
    Route::post('/projet/update', [ProjectController::class,"updateprojet"])->middleware("roles:admin")->name('parametre.updateprojet');
    Route::post('/projet/delete', [ProjectController::class,"deleteprojet"])->middleware("roles:admin")->name('parametre.deleteprojet');
    Route::get('/taskPro/{id}', [ProjectController::class,"taskOfProjet"])->middleware("roles:bothAE")->name('projet.task');
    Route::get('/commentTask/{id}', [TacheController::class,"commentOftach"])->middleware("roles:bothAE")->name('tach.comment');
    Route::post('/addcomment', [TacheController::class,"addcomment"])->middleware("roles:admin")->name('tach.addcomment');
    Route::post('/addlivrable', [TacheController::class,"addlivrabe"])->middleware("roles:employer")->name('tach.addlivrabe');
    Route::get('/activitePro/{id}', [TacheController::class,"ActiviteOfTache"])->middleware("roles:bothAE")->name('tache.activte');
    Route::get('/showLivrable/{id}', [TacheController::class,"ShowLivrable"])->middleware("roles:bothAE")->name('show.livrable');
    Route::get('/fullcalendar/{id}', [TacheController::class,"fullcalendar"])->middleware("roles:bothAE");


    // Route::get('/commentTask/{id}/acvtite/{act}', [TacheController::class,"commenview"])->name('comment.activite');
    ///
    ////
    Route::get('/timesheet',[ProjectController::class, "timesheet"])->name('project.timesheet');
    ////
    Route::get('/activite',[ActiviteController::class, "index"])->middleware("roles:bothAE")->name('project.team_leader');
    Route::post('/activite',[ActiviteController::class, "addActivite"])->middleware("roles:bothAE")->name('parametre.addActivite');
    Route::get('/activite/{id}/edit', [ActiviteController::class,"editActivite"]);
    Route::post('/activite/update', [ActiviteController::class,"updateActivite"])->middleware("roles:bothAE")->name('parametre.updateActivite');
    Route::post('/activite/statut', [TacheController::class,"updateSatut_Activite"])->middleware("roles:bothAE")->name('statut.Activite');

    Route::post('/activite/delete', [ActiviteController::class,"deleteActivite"])->middleware("roles:bothAE")->name('parametre.deleteActivite');
    Route::get('/notify/{id}', [ActiviteController::class,"readnotify"])->name('readnotify');


    //////

    Route::get('/index/cat_project',    [cat_projetController::class, "index"])->middleware("roles:admin")->name('cat_projet.index');
    Route::post('/cat_projetadd',       [cat_projetController::class, "addcat_projet"])->middleware("roles:admin")->name('parametre.addcat_projet');
    Route::get('/cat_projet/{id}/edit', [cat_projetController::class,"editcat_projet"]);
    Route::post('/cat_projet/update',   [cat_projetController::class,"updatecat_projet"])->middleware("roles:admin")->name('parametre.updatecat_projet');
    Route::post('/cat_projet/delete',   [cat_projetController::class,"deletecat_projet"])->middleware("roles:admin")->name('parametre.deletecat_projet');

    /////////////////

    Route::get('/task',            [TacheController::class, "index"])->middleware("roles:admin")->name('project.task');
    Route::post('/addtache',       [TacheController::class, "addtache"])->middleware("roles:admin")->name('parametre.addtache');
    Route::get('/tache/{id}/edit', [TacheController::class,"edittache"]);
    Route::post('/tache/update',   [TacheController::class,"updatetache"])->middleware("roles:admin")->name('parametre.updatetache');
    Route::post('/tache/delete',   [TacheController::class,"deletetache"])->middleware("roles:admin")->name('parametre.deletetache');

    ////////////////


    Route::get('/cat_tache',               [CatTacheController::class, "cat_tache"])->middleware("roles:admin")->name('parametre.cat_tache');
    Route::post('/addcat_tache',           [CatTacheController::class, "addcat_tache"])->middleware("roles:admin")->name('parametre.addcat_tache');
    Route::get('/editcat_tache/{id}/edit', [CatTacheController::class,"editcat_tache"]);
    Route::post('/updatecat_tache/update', [CatTacheController::class,"updatecat_tache"])->middleware("roles:admin")->name('parametre.updatecat_tache');
    Route::post('/deletecat_tache/delete', [CatTacheController::class,"deletecat_tache"])->middleware("roles:admin")->name('parametre.deletecat_tache');



    Route::get('/chat',[ChatController::class, "index"])->name('Chat.index');
    Route::get('/conversation/{uuid}',[ChatController::class, "conversation"])->name('Chat.conversation');
    Route::post('/sendMsg',[ChatController::class, "sendMsg"])->name('Chat.sendMsg');
    Route::get('/getAllMsg/{uuid}',[ChatController::class, "getAllMsg"])->name('Chat.getAllMsg');
    Route::post('/creat_conv',[ChatController::class, "createConversations"])->name('Chat.createConversations');
    Route::post('/add_user_conv',[ChatController::class, "ajouteruser"])->name('Chat.ajouteruser');



});


Route::group(['prefix' => 'client', "middleware" => ["auth","blockUser"]  ],function () {
    Route::get('/index',[ClientController::class, "index"])->middleware("roles:bothAC")->name('client.index');
    Route::post('/addClient',[ClientController::class, "addClient"])->middleware("roles:bothAC")->name('parametre.addClient');
    Route::get('/Client/{id}/edit', [ClientController::class,"editClient"])->middleware("roles:bothAC");
    Route::post('/Client/update', [ClientController::class,"updateClient"])->middleware("roles:bothAC")->name('parametre.updateClient');
    Route::post('/Client/delete', [ClientController::class,"deleteClient"])->middleware("roles:bothAC")->name('parametre.deleteClient');

});


Route::group(['prefix' => 'user' ],function () {
    Route::get('/index',          [UserController::class, "index"])->middleware("roles:admin")->name('user.index');
    Route::post('/addUser',       [UserController::class, "addUser"])->middleware("roles:admin")->name('para.addUser');
    Route::get('/User/{id}/edit', [UserController::class,"editUser"]);
    Route::post('/User/update',   [UserController::class, "updateUser"])->middleware("roles:admin")->name('para.updateUser');
    Route::post('/User/delete',   [UserController::class,"deleteUser"])->middleware("roles:admin")->name('para.deleteUser');
    Route::post('/User/activUser',   [UserController::class,"activUser"])->middleware("roles:admin")->name('para.activUser');
});


Route::group(['prefix' => 'parametre', "middleware" => ["auth","blockUser"] ],function () {
    Route::get('/role',   [parametreController::class, "role"])->middleware("roles:admin")->name('parametre.role');
    Route::get('/statut', [StatutController::class, "statut"])->middleware("roles:admin")->name('parametre.statut');
    Route::get('/index',  [CatLivrableController::class, "cat_livrable"])->middleware("roles:admin")->name('parametre.cat_livrable');

    Route::post('/addcat_Statut',       [StatutController::class, "cat_addStatut"])->middleware("roles:admin")->name('parametre.cat_addStatut');
    Route::get('/cat_statut/{id}/edit', [StatutController::class,"cat_edit"]);
    Route::post('/cat_statut/update',   [StatutController::class,"cat_update"])->middleware("roles:admin")->name('parametre.cat_update');
    Route::post('/cat_statut/delete',   [StatutController::class,"cat_delete"])->middleware("roles:admin")->name('parametre.cat_delete');

    Route::post('/addStatut',       [StatutController::class, "addStatut"])->middleware("roles:admin")->name('parametre.addStatut');
    Route::get('/statut/{id}/edit', [StatutController::class,"edit"]);
    Route::post('/statut/update',   [StatutController::class,"update"])->middleware("roles:admin")->name('parametre.update');
    Route::post('/statut/delete',   [StatutController::class,"delete"])->middleware("roles:admin")->name('parametre.delete');

    Route::post('/addrole',         [parametreController::class, "addrole"])->middleware("roles:admin")->name('parametre.addrole');
    Route::get('/role/{id}/edit',   [parametreController::class,"editrole"]);
    Route::post('/role/update',     [parametreController::class,"updaterole"])->middleware("roles:admin")->name('parametre.updaterole');
    Route::post('/role/delete',     [parametreController::class,"deleterole"])->middleware("roles:admin")->name('parametre.deleterole');

    Route::post('/addcat_livrable',       [CatLivrableController::class, "addcat_livrable"])->middleware("roles:admin")->name('parametre.addcat_livrable');
    Route::get('/cat_livrable/{id}/edit', [CatLivrableController::class,"editrole"]);
    Route::post('/cat_livrable/update',   [CatLivrableController::class,"updatecat_livrable"])->middleware("roles:admin")->name('parametre.updatecat_livrable');
    Route::post('/cat_livrable/delete',   [CatLivrableController::class,"deletecat_livrable"])->middleware("roles:admin")->name('parametre.deletecat_livrable');

});


Route::group(['prefix' => 'opportunite' ],function () {
    Route::get('/index',[OpportuniteController::class, "index"])->middleware("roles:bothAC")->name('opportunite.index');
    Route::post('/addOpportunite',[OpportuniteController::class, "addOpportunite"])->middleware("roles:bothAC")->name('parametre.addOpportunite');
    Route::get('/Opportunit/{id}/edit', [OpportuniteController::class,"editOpportunite"])->middleware("roles:bothAC");
    Route::post('/Opportunit/update', [OpportuniteController::class,"updateOpportunite"])->middleware("roles:bothAC")->name('parametre.updateOpportunite');
    Route::post('/Opportunit/delete', [OpportuniteController::class,"deleteOpportunite"])->middleware("roles:bothAC")->name('parametre.deleteOpportunite');

});


Auth::routes();
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
