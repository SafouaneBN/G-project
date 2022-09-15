<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;
use App\Models\tache;
use App\Models\statut;
use App\Models\projet;
use App\Models\cat_tache;
use App\Models\cat_livrable;
use App\Models\activite;
use App\Models\User;
use App\Models\commentaire;
use Illuminate\Support\Facades\DB;
use App\Models\livrable;
use App\Traits\imageTrait;
use App\Models\notification;


use Carbon\Carbon;
use Response;



class TacheController extends Controller
{
    use imageTrait;

    public function index(){
        $taches = tache::with(['catTach_tach','statut_tach','project'])
        ->get();
        $notifications = notification::where('user_accesses',Auth::user()->id)->get();
        $statut = statut::get();
        $statuts = statut::where('statut_id', '2')->get();
        $projets = projet::with('tachs')->get();
        $cat_taches = cat_tache::with('tach_catTach')->get();



        //return $projets;

        return view('pages.projects.task',compact('taches','projets','cat_taches','statuts','notifications','statut'));
    }

    public function addtache(Request $request){

        $to  = Carbon::createFromFormat('Y-m-d', $request->date_debut);
        $from = Carbon::createFromFormat('Y-m-d', $request->date_fin);

        $diff_in_days = $to->diffInDays($from);

        $tache = tache::create([
            "tache"=>$request->tache,
            "date_debut"=>$request->date_debut,
            "date_fin"=>$request->date_fin,
            "cat_tache_id"=>$request->cat_tache_id,
            "projet_id"=>$request->projet_id,
            "statut_id"=> "1",

            "estemation"=>$diff_in_days,

        ]);
        return redirect()->back()->with("Ajouter avec succes");
    }

    public function updatetache(Request $request)
    {
        $tache = tache::find($request->id);
        $projet = projet::find($request->projet_id_edit);


         $tache->update([
            "tache"=>$request->tache_edit,
            "date_debut"=>$request->date_debut_edit,
            "date_fin"=>$request->date_fin_edit,
            "cat_tache_id"=>$request->cat_tache_id_edit,
            "projet_id"=>$request->projet_id_edit,
            "statut_id"=>$request->statut_id_edit,

         ]);

         $tasks = tache::where('projet_id',$request->projet_id_edit)->get();

         $complte = true;

         foreach($tasks as $task)
         {
            if($task->statut_id != 2)
            {
                $complte = false;
                break;

            }
         }
        //
         if($complte == true)
         {

            $projet->update([
                "statu_id"=>37,

            ]);

         }else
         {
            $projet->update([
                "statu_id"=>19,

            ]);

         }



        return redirect()->back()->with(' Modifier avec succes');
    }

    public function edittache($id)
    {
        $tache = tache::find($id);

        return view('pages.projects.task',compact('tache'));
    }


    public function deletetache(Request $request)
    {
        $tache = tache::find($request->id);
        if (!$tache){
            redirect() -> back() -> with(['error' => 'tache pas trouve']);
        }
        $tache->delete();

        return response() -> json([
            'status' => true,
            'msg' => 'well Done !!',
            'id' => $request -> id,
        ]);
    }

    public function commentOftach($id){
        $activites = activite::with(['statut_activites','user_activites','livrable_activites'])->find($id);
        $notifications =notification::where('user_accesses',Auth::user()->id)->get();
        $statut = statut::where('statut_id', '2')->get();
        $livrables = livrable::with('livrable_catlivrable','activite_livrable')->get();
        $cat_livrables = cat_livrable::with('livrable_catLivrable')->get();
        //
        $id_tache = $activites->tache_id;
        if(!$activites)
            return redirect()->back();

        $commentair = [];
        foreach($activites->livrable_activites as $liv){
            $comt = DB::select("select commentaires.*,livrables.livrable, users.name from commentaires,users,livrables where commentaires.user_id = users.id and livrables.id = commentaires.livrables_id and commentaires.livrables_id = $liv->id;");

            array_push($commentair, $comt);
        }

        // return $commentair;

       return view('pages.projects.comment_tach',compact('activites','commentair','cat_livrables','livrables','notifications','statut','id_tache'));
    }

    public function commenview(){
        $activites = activite::find($id);

        $notifications =notification::where('user_accesses',Auth::user()->id)->get();


        //return $projets;

        return view('pages.projects.comment_tach',compact('activites','notifications'));
    }

    public function addcomment(Request $request){

        $commentaire = commentaire::create([


            "commentaires"=>$request->desc,
            "livrables_id"=>$request->livrab,
            "user_id" => Auth::user()->id,
        ]);
        return redirect()->back()->with("Ajouter avec succes");
    }

    public function addlivrabe(Request $request){

        $image = $this->saveImage( $request->image , 'assets/livrable');

        $livrable = livrable::create([
            "livrable" => $request->libelle,
            "activites_id"=>$request->id_liv,
            "cat_livrable_id"=>$request->categorie,
            "fichier" => $image,
            "user_id" => Auth::user()->id,
        ]);
        return redirect()->back()->with("Ajouter avec succes");
    }

    public function ActiviteOfTache($id, Request $request){
        $tache = tache::find($id);
        if(!$tache)
            return redirect()->back();

            $activite = activite::where('tache_id', $id)->get();
            $activites = activite::with('tach_activites','projet_activites','user_activites')->get();
            $projets = projet::with('activite_projet')->get();
            $users = user::where('role_id', '2')->get();
            $taches = tache::with('activite_tach')->get();

            $notifications =notification::where('user_accesses',Auth::user()->id)->get();



        return view('pages.projects.team_leader',compact('activite','tache','projets','taches','activites','users','notifications','id'));
    }

    public function fullcalendar($id)
    {
        $data = activite::select('libelle as title','planification_date_debut as start','planification_date_fin as end')->where('tache_id',$id)->get();
        return Response::json($data);
    }


    public function ShowLivrable($id, Request $request){
        $livrable = livrable::find($id);
        if(!$livrable)
            return redirect()->back();

            $activite = activite::where('tache_id', $id)->get();
            $activites = activite::with('tach_activites','projet_activites','user_activites')->get();
            $projets = projet::with('activite_projet')->get();
            $users = user::where('role_id', '2')->get();
            $taches = tache::with('activite_tach')->get();

            $notifications =notification::where('user_accesses',Auth::user()->id)->get();



        return view('pages.projects.Show_livrable',compact('activite','projets','taches','activites','users','livrable','notifications'));
    }


    public function updateSatut_Activite(Request $request)
    {
        $Activite = activite::find($request->activite_id_edit);
        $tach = tache::find($request->tache_id_edit);


         $Activite->update([

            "statu_id"=>$request->statut_id_edit,

         ]);

         $Activites = activite::where('tache_id',$request->tache_id_edit)->get();

         $complte = true;

         foreach($Activites as $Activite)
         {
            if($Activite->statu_id != 36)
            {
                $complte = false;
                break;

            }
         }
        //
         if($complte == true)
         {

            $tach->update([
                "statut_id"=>2,

            ]);

         }else
         {
            $tach->update([
                "statut_id"=>10,

            ]);

         }



        return redirect()->back()->with(' Modifier avec succes');
    }


}

