<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class statut extends Model
{
    use HasFactory;

    public $guarded = [];
    public $table = "statuts";
    protected $primaryKey = "id";


    public function activite_statut(){
        return $this->hasMany(activite::class,);
    }

    public function tache_statut(){
        return $this->hasMany(tache::class,"statut_id","id");
    }

    public function catStatu_statut(){
        return $this->belongsTo(cat_statut::class , "statut_id", "id");
    }
}
