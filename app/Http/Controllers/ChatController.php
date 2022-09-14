<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\conversation;
use App\Models\message;
use Illuminate\Support\Facades\Auth;


class ChatController extends Controller
{
    public function index(){

        $conversations = conversation::with(['messages','user_conversation' => function($q){
            $q->where('users.id' , Auth::user()->id);
        }])->get();
        return view('pages.chat.Chat',compact('conversations'));
    }


    public function conversation($uuid){
        $conversation = conversation::where('uuid', $uuid)->first();
        if(!$conversation){
            return redirect()->back();
        }

        $messages = message::where('conversations_id', $conversation->id)->get();

        $conversations = conversation::with(['messages','user_conversation' => function($q){
            $q->where('users.id' , Auth::user()->id);
        }])->get();

        return view('pages.chat.Conversation',compact('conversations','messages','conversation'));
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
}
