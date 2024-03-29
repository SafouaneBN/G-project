<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\opportunite;
use App\Models\client;
use App\Models\notification;

use App\Models\User;



class OpportuniteController extends Controller
{
    public function index(){
        $opportunites = opportunite::with('client_opportunite')->get();
        $clients = client::with('opportunite_client')->get();
        $notifications =notification::where('user_accesses',Auth::user()->id)->get();

        return view('pages.opportunites.opportunite',compact('opportunites','clients','notifications'));
    }

    public function addOpportunite(Request $request){

        $opportunite = opportunite::create([
            "opportunite"=>$request->Opportunite,
            "Date_opportunite"=>$request->date,
            "client_id"=>$request->client,
            "user_id" => Auth::user()->id,
        ]);
        return redirect()->back()->with("Ajouter avec succes");
    }

    public function updateOpportunite(Request $request)
    {
        $opportunite = opportunite::find($request->id);


         $opportunite->update([
            "opportunite"=>$request->Opportunite_edit,
            "Date_opportunite"=>$request->date_edit,
            "client_id"=>$request->client_edit,



         ]);


        return redirect()->back()->with(' Modifier avec succes');
    }

    public function editopportunite($id)
    {
        $opportunite = opportunite::find($id);

        return view('pages.opportunites.opportunite',compact('opportunite'));
    }
    public function deleteOpportunite(Request $request)
    {
        $opportunite = opportunite::find($request->id);
        if (!$opportunite){
            redirect() -> back() -> with(['error' => 'opportunite pas trouve']);
        }
        $opportunite->delete();

        return response() -> json([
            'status' => true,
            'msg' => 'well Done !!',
            'id' => $request -> id,
        ]);
    }


}
