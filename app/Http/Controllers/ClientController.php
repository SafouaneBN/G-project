<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\client;


class ClientController extends Controller
{
    public function index(){
        $clients = client::get();

        return view('pages.clients.client',compact('clients'));
    }

    public function addClient(Request $request){

        $client = client::create([
            "full_name"=>$request->full_name,
            "email"=>$request->email
                ]);
        return redirect()->back()->with("Ajouter avec succes");
    }

    public function updateClient(Request $request)
    {
        $client = client::find($request->id_client);


         $client->update([

           "full_name" => $request->full_name_edit,
             "email" => $request->email_edit
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
