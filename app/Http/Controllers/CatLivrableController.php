<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\cat_livrable;


class CatLivrableController extends Controller
{
    public function cat_livrable(){
        $cat_livrables = cat_livrable::get();

        return view('pages.parametre.cat_livrable',compact('cat_livrables'));
    }



    ///

    public function addcat_livrable(Request $request){

        $cat_livrable = cat_livrable::create([
            "cat_livrable" => $request->libelle,
        ]);
        return redirect()->back()->with("Ajouter avec succes");
    }

    public function updatecat_livrable(Request $request)
    {
        $cat_livrable =  cat_livrable::find($request->id);
        $cat_livrable->update([
            "cat_livrable"=>$request->libelle_edit
        ]);


        return redirect()->back()->with(' Modifier avec succes');
    }

    public function editcat_livrable($id)
    {
        $cat_livrable = cat_livrable::find($id);

        return view('pages.parametre.cat_livrable',compact('cat_livrable'));
    }
    public function deletecat_livrable(Request $request)
    {
        $cat_livrable = cat_livrable::find($request->id);
        if (!$cat_livrable){
            redirect() -> back() -> with(['error' => 'cat_livrable pas trouve']);
        }
        $cat_livrable->delete();

        return response() -> json([
            'status' => true,
            'msg' => 'will Done !!',
            'id' => $request -> id,
        ]);
    }

}
