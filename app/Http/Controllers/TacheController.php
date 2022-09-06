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
use Illuminate\Support\Carbon;
use App\Models\livrable;
use App\Traits\imageTrait;



class TacheController extends Controller
{
    use imageTrait;

    public function index(){
        $taches = tache::with(['catTach_tach','statut_tach','project'])
        ->get();


        $statuts = statut::with('tache_statut')->get();
        $projets = projet::with('tachs')->get();
        $cat_taches = cat_tache::with('tach_catTach')->get();



        //return $projets;

        return view('pages.projects.task',compact('taches','projets','cat_taches','statuts'));
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
            "statut_id"=>$request->statut_id,
            "estemation"=>$diff_in_days,

        ]);
        return redirect()->back()->with("Ajouter avec succes");
    }

    public function updatetache(Request $request)
    {
        $tache = tache::find($request->id);


         $tache->update([
            "tache"=>$request->tache_edit,
            "date_debut"=>$request->date_debut_edit,
            "date_fin"=>$request->date_fin_edit,
            "cat_tache_id"=>$request->cat_tache_id_edit,
            "projet_id"=>$request->projet_id_edit,
            "statut_id"=>$request->statut_id_edit,

         ]);


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

        $livrables = livrable::with('livrable_catlivrable','activite_livrable')->get();
        $cat_livrables = cat_livrable::with('livrable_catLivrable')->get();

        if(!$activites)
            return redirect()->back();

        $commentair = [];
        foreach($activites->livrable_activites as $liv){
            $comt = DB::select("select commentaires.*,livrables.livrable, users.name from commentaires,users,livrables where commentaires.user_id = users.id and livrables.id = commentaires.livrables_id and commentaires.livrables_id = $liv->id;");

            array_push($commentair, $comt);
        }

        // return $commentair;

       return view('pages.projects.comment_tach',compact('activites','commentair','cat_livrables','livrables'));
    }

    public function commenview(){
        $activites = activite::find($id);



        //return $projets;

        return view('pages.projects.comment_tach',compact('activites'));
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


}

