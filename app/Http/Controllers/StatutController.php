<?php

namespace App\Http\Controllers;
use App\Models\statut;
use App\Models\cat_statut;
use App\Models\notification;
use Illuminate\Support\Facades\Auth;

use App\Models\User;




use Illuminate\Http\Request;

class StatutController extends Controller
{

    public function statut(){

        $statuts = statut::with('catStatu_statut')->get();
        $cat_statuts = cat_statut::with('statut_catStatu')->get();
        $notifications =notification::where('user_accesses',Auth::user()->id)->get();


        // return $statuts;

        return view('pages.parametre.statut',compact('statuts','cat_statuts','notifications'));
    }

    public function addStatut(Request $request){
        $sstatuts = statut::create([

            "statut"=>$request->lstatu,
            "statut_id"=>$request->ca_statut
        ]);
        return redirect()->back()->with("Ajouter avec succes");
    }

    public function update(Request $request)
    {
        $sstatuts =  statut::find($request->id);
        $sstatuts->update([
            "statut"=>$request->edit_lstatu,
            "statut_id"=>$request->c_statut
        ]);


        return redirect()->back()->with(' Modifier avec succes');
    }

    public function edit($id)
    {
        $sstatuts = statut::find($id);

        return view('pages.parametre.statut',compact('statut'));
    }
    public function delete(Request $request)
    {
        $sstatuts = statut::find($request->id);
        if (!$sstatuts){
            redirect() -> back() -> with(['error' => 'statut pas trouve']);
        }
        $sstatuts->delete();

        return response() -> json([
            'status' => true,
            'msg' => 'well Done !!',
            'id' => $request -> id,
        ]);
    }



    //////


    public function cat_addStatut(Request $request){

        $statut = cat_statut::create([
            "libelle" => $request->libelle,
        ]);
        return redirect()->back()->with("Ajouter avec succes");
    }

    public function cat_update(Request $request)
    {
        $statut =  cat_statut::find($request->id);
        $statut->update([
            "libelle"=>$request->libelle
        ]);


        return redirect()->back()->with(' Modifier avec succes');
    }

    public function cat_edit($id)
    {
        $statut = cat_statut::find($id);

        return view('pages.parametre.statut',compact('statut'));
    }
    public function cat_delete(Request $request)
    {
        $statut = cat_statut::find($request->id);
        if (!$statut){
            redirect() -> back() -> with(['error' => 'statut pas trouve']);
        }
        $statut->delete();

        return response() -> json([
            'status' => true,
            'msg' => 'well Done !!',
            'id' => $request -> id,
        ]);
    }


}
