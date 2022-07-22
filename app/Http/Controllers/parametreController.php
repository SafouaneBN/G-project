<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\cat_statut;
use App\Models\role;

class parametreController extends Controller
{
    public function role(){
        $roles = role::get();

        return view('pages.parametre.role',compact('roles'));
    }

   

    ///

    public function addrole(Request $request){

        $role = role::create([
            "libelle" => $request->libelle,
        ]);
        return redirect()->back()->with("Ajouter avec succes");
    }

    public function updaterole(Request $request)
    {
        $role =  role::find($request->id);
        $role->update([
            "libelle"=>$request->libelle
        ]);


        return redirect()->back()->with(' Modifier avec succes');
    }

    public function editrole($id)
    {
        $role = role::find($id);

        return view('pages.parametre.role',compact('role'));
    }
    public function deleterole(Request $request)
    {
        $role = role::find($request->id);
        if (!$role){
            redirect() -> back() -> with(['error' => 'role pas trouve']);
        }
        $role->delete();

        return response() -> json([
            'status' => true,
            'msg' => 'will Done !!',
            'id' => $request -> id,
        ]);
    }

}
