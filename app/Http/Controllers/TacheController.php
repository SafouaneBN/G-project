<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\tache;
use App\Models\statut;
use App\Models\projet;
use App\Models\cat_tache;


class TacheController extends Controller
{
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

        $tache = tache::create([
            "tache"=>$request->tache,
            "date_debut"=>$request->date_debut,
            "date_fin"=>$request->date_fin,
            "cat_tache_id"=>$request->cat_tache_id,
            "projet_id"=>$request->projet_id,
            "statut_id"=>$request->statut_id,

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


}

