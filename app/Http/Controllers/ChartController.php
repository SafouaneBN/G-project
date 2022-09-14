<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\projet;
use App\Models\client;
use App\Models\opportunite;
use App\Models\User;
use DB;


class ChartController extends Controller
{
    public function index(){

        $projets = projet::count();
        $clients = client::count();
        $opportunites = opportunite::count();
        $users = user::where('role_id', '2')->get();
        return view('pages.Home',compact('projets','opportunites','clients','users'));

    }



    public function evolution1(){
        $data = DB::select("SELECT COUNT(activites.id) as count, DATE_FORMAT(activites.created_at, '%Y-%m-%d') as date
        FROM activites

        GROUP BY date ORDER BY date ASC;");

        return $data;
    }

    public function countprojectstatu(){
        $data = DB::select("
                SELECT COUNT(projets.id) as count, statuts.statut  FROM projets , statuts
                WHERE projets.statu_id = statuts.id
                group BY projets.statu_id
        ");

        return $data;
    }
}
