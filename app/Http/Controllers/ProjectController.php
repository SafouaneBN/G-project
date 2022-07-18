<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function index(){
        return view('pages.projects.project');
    }
    public function task(){
        return view('pages.projects.task');
    }
    public function timesheet(){
        return view('pages.projects.timesheet');
    }
    public function team_leader(){
        return view('pages.projects.team_leader');
    }
    
}

