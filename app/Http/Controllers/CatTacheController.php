<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\cat_tache;


class CatTacheController extends Controller
{
    public function cat_tache(){
        $cat_taches = cat_tache::get();

        return view('pages.parametre.cat_tache',compact('cat_taches'));
    }



    ///

    public function addcat_tache(Request $request){

        $cat_tache = cat_tache::create([
            "cat_tache" => $request->libelle,
        ]);
        return redirect()->back()->with("Ajouter avec succes");
    }

    public function updatecat_tache(Request $request)
    {
        $cat_tache =  cat_tache::find($request->id);
        $cat_tache->update([
            "cat_tache"=>$request->libelle
        ]);


        return redirect()->back()->with(' Modifier avec succes');
    }

    public function editcat_tache($id)
    {
        $cat_tache = cat_tache::find($id);

        return view('pages.parametre.cat_tache',compact('cat_tache'));
    }
    public function deletecat_tache(Request $request)
    {
        $cat_tache = cat_tache::find($request->id);
        if (!$cat_tache){
            redirect() -> back() -> with(['error' => 'cat_tache pas trouve']);
        }
        $cat_tache->delete();

        return response() -> json([
            'status' => true,
            'msg' => 'will Done !!',
            'id' => $request -> id,
        ]);
    }


}
