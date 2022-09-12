<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\activite;
use App\Models\notification;
use App\Models\tache;
use App\Models\projet;
use App\Models\User;
use App\Notifications\Notify_activite;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;


class ActiviteController extends Controller
{
  public function index(){

    $activites = activite::with('tach_activites','projet_activites','user_activites')->get();
    $taches = tache::with('activite_tach')->get();
    $projets = projet::with('activite_projet')->get();
    $users = user::where('role_id', '2')->get();
    return view('pages.projects.team_leader',compact('projets','activites','taches','users'));

  }

  public function addActivite(Request $request){

    $user = user::find($request->user_accesses);

    $to  = Carbon::createFromFormat('Y-m-d', $request->date_d);
    $from = Carbon::createFromFormat('Y-m-d', $request->date_f);

    $diff_in_days = $to->diffInDays($from);

    $activite = activite::create([
        "libelle"=>$request->libelle,
        "projet_id"=>$request->projet,
        "tache_id"=>$request->tache,
        "description"=>$request->description,
        "planification_date_debut"=>$request->date_d,
        "planification_date_fin"=>$request->date_f,
        "execution_date_debut"=>$request->date_e_d,
        "duree_prevue"=>$diff_in_days,
        "execution_date_fin"=>$request->date_e_f,
        "priorite"=>$request->priorite,
        "user_accesses"=>$request->user_accesses,
        "statu_id" => "1",
        "user_id" => Auth::user()->id,
    ]);

    $notification = notification::create([
        "etat"=>'not readed',
        "message"=>$request->libelle,
        "user_accesses"=>$user->id,
        "user_id" => Auth::user()->id,
    ]);

    return redirect()->back()->with("Ajouter avec succes");
}

public function readnotify(Request $request)
{
    $notification = notification::find($request->id);

    if (!$notification){
        return redirect() -> back() -> with(['error' => 'no notification']);
    }

    $notification->update([
        "etat"=>'read it',
    ]);

    return redirect() -> back();

}

public function updateActivite(Request $request)
{
    $activite = activite::find($request->id);


     $activite->update([
        "opportunite"=>$request->Opportunite_edit,
        "Date_opportunite"=>$request->date_edit,
        "client_id"=>$request->client_edit,



     ]);


    return redirect()->back()->with(' Modifier avec succes');
}

public function editActivite($id)
{
    $activite = activite::find($id);

    return view('pages.opportunites.opportunite',compact('opportunite'));
}
public function deleteActivite(Request $request)
{
    $activite = activite::find($request->id);
    if (!$activite){
        redirect() -> back() -> with(['error' => 'opportunite pas trouve']);
    }
    $activite->delete();

    return response() -> json([
        'status' => true,
        'msg' => 'well Done !!',
        'id' => $request -> id,
    ]);
}

}
