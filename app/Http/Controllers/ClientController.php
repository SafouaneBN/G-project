<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\client;
use App\Models\notification;
use Illuminate\Support\Facades\Auth;


use App\Models\User;


class ClientController extends Controller
{
    public function index(){
        $clients = client::get();
        // $notifications =notification::where('user_accesses',Auth::user()->id)->get();


        return view('pages.clients.client',compact('clients'));
    }

    public function addClient(Request $request){

        $client = client::create([
            "type_client"=>$request->type_client,
            "full_name"=>$request->full_name,
            "email"=>$request->email,
            "ville"=>$request->ville,
            "pays"=>$request->pays,
            "telephone"=>$request->telephone
        ]);
        return redirect()->back()->with("Ajouter avec succes");
    }

    public function updateClient(Request $request)
    {
        $client = client::find($request->id);

         $client->update([

            "type_client"=>$request->type_edit,
            "full_name"=>$request->full_name_edit,
            "email"=>$request->email_edit,
            "ville"=>$request->ville_edit,
            "pays"=>$request->pays_edit,
            "telephone"=>$request->tele_edit
         ]);


        return redirect()->back()->with(' Modifier avec succes');
    }

    public function editClient($id)
    {
        $client = client::find($id);

        return view('pages.clients.client',compact('client'));
    }
    public function deleteClient(Request $request)
    {
        $client = client::find($request->id);
        if (!$client){
            redirect() -> back() -> with(['error' => 'client pas trouve']);
        }
        $client->delete();

        return response() -> json([
            'status' => true,
            'msg' => 'well Done !!',
            'id' => $request -> id,
        ]);
    }


}
