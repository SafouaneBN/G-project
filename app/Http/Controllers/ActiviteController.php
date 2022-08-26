<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\activite;


class ActiviteController extends Controller
{
  public function index(){

    $activites = activite::with('user_role')->get();

  }
}
