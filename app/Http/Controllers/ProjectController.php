<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\opportunite;
use App\Models\projet;
use App\Models\activite;
use App\Models\tache;
use App\Models\cat_projet;


class ProjectController extends Controller
{

    public function index(){
        $projets = projet::with(['opportunite_projet','catProjet_projet','tachs'])
        ->get();


        $opportunites = opportunite::with('projet_opportunite')->get();
        $cat_projets = cat_projet::with('projet_catProjet')->get();



        //return $projets;

        return view('pages.projects.project',compact('opportunites','projets','cat_projets'));
    }

    public function addprojet(Request $request){

        $projet = projet::create([

            "projet"=>$request->projet,
            "date_projet"=>$request->dateP,
            "description"=>$request->desc,
            "opportunite_id"=>$request->opportunite,
            "catpro_id"=>$request->categorie,
            "user_id" => Auth::user()->id,
        ]);
        return redirect()->back()->with("Ajouter avec succes");
    }

    public function updateprojet(Request $request)
    {
        $projet = projet::find($request->id);


         $projet->update([

            "projet"=>$request->projet_edit,
            "date_projet"=>$request->dateP_edit,
            "description"=>$request->desc_edit,
            "opportunite_id"=>$request->opportunite_edit,
            "catpro_id"=>$request->categorie_edit,

         ]);


        return redirect()->back()->with(' Modifier avec succes');
    }

    public function editprojet($id)
    {
        $projet = projet::find($id);

        return view('pages.projects.project',compact('projet'));
    }

    public function deleteOpportunite(Request $request)
    {
        $projet = projet::find($request->id);
        if (!$projet){
            redirect() -> back() -> with(['error' => 'projet pas trouve']);
        }
        $projet->deleteprojet();

        return response() -> json([
            'status' => true,
            'msg' => 'well Done !!',
            'id' => $request -> id,
        ]);
    }

    public function taskOfProjet($id){
        $projet = projet::find($id);
        if(!$projet)
            return redirect()->back();

        ///get TASK
        $tasks = tache::where('projet_id', $id)->get();
        $activitiesList = [];

        foreach($tasks as $task){
            $activities = activite::with('livrable_activites','user_activites_acces')->where('tache_id', $task->id)->get();
            array_push($activitiesList, $activities);
        }

        return view('pages.projects.project_tach',compact('activitiesList','tasks'));
    }

///////////////////


    public function timesheet(){
        return view('pages.projects.timesheet');
    }

    public function team_leader(){
        return view('pages.projects.team_leader');
    }
}



