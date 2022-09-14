<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\notification;

use App\Models\role;
use Illuminate\Support\Facades\Auth;


class UserController extends Controller
{
    public function index(){
        $users = User::with('user_role')->get();
        $roles = role::with('rol_user')->get();
        $notifications =notification::where('user_accesses',Auth::user()->id)->get();

       //return $users;
    return view('pages.Users.user',compact('users','roles','notifications'));


    }

    public function addUser(Request $request){

        //return $request;
        $User = User::create([
            "name" =>$request->name,
            "email" =>$request->email,
            "password" =>bcrypt($request->password),
            "role_id" =>$request->role
        ]);
        return redirect()->back()->with("Ajouter avec succes");
    }

    public function updateUser(Request $request)
    {
        $User = User::find($request->id);


         $User->update([

            "name"=>$request->name_edit,
            "email"=>$request->email_edit,
            "password"=>$request->password_edit,
            "role_id"=>$request->role_id_edit,



         ]);


        return redirect()->back()->with(' Modifier avec succes');
    }

    public function editUser($id)
    {
        $User = User::find($id);

        return view('pages.Users.user',compact('User'));
    }
    public function deleteUser(Request $request)
    {
        $User = User::find($request->id);
        if (!$User){
            redirect() -> back() -> with(['error' => 'User pas trouve']);
        }
        $User->update([
            "active" => "0",
        ]);


    }
    public function activUser(Request $request)
    {
        $User = User::find($request->id);
        if (!$User){
            redirect() -> back() -> with(['error' => 'User pas trouve']);
        }
        $User->update([
            "active" => "1",
        ]);


    }
}
