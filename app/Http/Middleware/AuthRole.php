<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class AuthRole
{
    public function handle(Request $request, Closure $next, $garde = null)
    {
        $typeAuth = "";
        if(auth()->user()->role_id == 3){
            $typeAuth = "admin";
        }elseif(auth()->user()->role_id == 2){
            $typeAuth = "employer";
        }elseif(auth()->user()->role_id == 1){
            $typeAuth = "commercial";
        }



        if($garde == "admin" && $typeAuth == "admin"){
            return $next($request);
        }elseif($garde == "commercial" && $typeAuth == "commercial"){
            return $next($request);
        }elseif($garde == "employer" && $typeAuth == "employer"){
            return $next($request);
        }elseif($garde == "bothAC" && ($typeAuth == "commercial" || $typeAuth == "admin")){
            return $next($request);
        }elseif($garde == "bothAE" && ($typeAuth == "employer" || $typeAuth == "admin")){
            return $next($request);
        }else{
            return  redirect('error');
        }
    }
}
