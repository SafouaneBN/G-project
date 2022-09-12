<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\cat_projet;
use App\Models\notification;
use Illuminate\Support\Facades\Auth;
use App\Models\User;




class cat_projetController extends Controller
{
    public function index(){
        $cat_projets = cat_projet::get();
        $notifications =notification::where('user_accesses',Auth::user()->id)->get();


        return view('pages.cat_projets.cat_projet',compact('cat_projets','notifications'));
    }

    public function addcat_projet(Request $request){

        $cat_projet = cat_projet::create([
            "libelle"=>$request->categorie,

        ]);
        return redirect()->back()->with("Ajouter avec succes");
    }

    public function updatecat_projet(Request $request)
    {
        $cat_projet = cat_projet::find($request->id);


         $cat_projet->update([
            "libelle"=>$request->categorie_edit,


         ]);


        return redirect()->back()->with(' Modifier avec succes');
    }

    public function editcat_projet($id)
    {
        $cat_projet = cat_projet::find($id);

        return view('pages.cat_projets.cat_projet',compact('cat_projet'));
    }

    public function deletecat_projet(Request $request)
    {
        $cat_projet = cat_projet::find($request->id);
        if (!$cat_projet){
            redirect() -> back() -> with(['error' => 'cat_projet pas trouve']);
        }
        $cat_projet->delete();

        return response() -> json([
            'status' => true,
            'msg' => 'well Done !!',
            'id' => $request -> id,
        ]);
    }


}
