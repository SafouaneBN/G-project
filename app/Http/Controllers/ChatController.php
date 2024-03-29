<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\conversation;
use App\Models\message;
use App\Models\projet;
use App\Models\UserConversation;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;


class ChatController extends Controller
{
    public function index(){
        // return *
        $arrayConversation = [];
        $conversations = conversation::with(['messages','user_conversation'])->get();

        foreach($conversations as $conversation){
            if($conversation["user_conversation"] != "[]"){
                array_push($arrayConversation,$conversation);
            }
        }

        return view('pages.chat.Chat',compact('arrayConversation'));
    }


    public function conversation($uuid){
        $conv = conversation::where('uuid', $uuid)->first();
        $arrayConversation = [];
        $users = User::get();



        if(!$conv){
            return redirect()->back();
        }

        $messages = message::where('conversations_id', $conv->id)->get();


        $projets = projet::with('conv_projrt')->get();

        $conversations = conversation::with(['messages','user_conversation'])->get();

        foreach($conversations as $conversation){
            if($conversation["user_conversation"] != "[]"){
                array_push($arrayConversation,$conversation);
            }
        }



        return view('pages.chat.Conversation',compact('arrayConversation','messages','conv','projets','users'));
    }

    public function sendMsg(Request $request){
        $messages = message::create([
            'conversations_id' => $request->con_id,
            'email' => Auth::user()->email,
            'body' => $request->msgBoxN
        ]);

        return $request;
    }

    public function getAllMsg($uuid){
        $conversation = conversation::where('uuid' , $uuid)->first();
        $messaege = message::where('conversations_id', $conversation->id)->orderBy('created_at', 'ASC')->get();



        return response()->json([
            "status" =>true,
            "data" => $messaege
        ]);
    }


    public function createConversations(Request $request){
        $conversation = conversation::create([
            'uuid' => Str::uuid(),
            'projet_id' => $request->projet,
            'name' => $request->name
        ]);


        UserConversation::create([
            'user_id' => Auth::user()->id,
            'conversations_id' => $conversation->id
        ]);

        return redirect()->back();
    }

    public function ajouteruser(Request $request){
        $UserConversation = UserConversation::create([

            'user_id' => $request->conv_user,
            'conversations_id' => $request->conv_id
        ]);

        return redirect()->back();
    }
}
