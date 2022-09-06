<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tache extends Model
{
    use HasFactory;
    public $guarded = [];
    public $table = "taches";

    public function catTach_tach(){
        return $this->belongsTo(cat_tache::class,"cat_tache_id","id");
    }

    public function activite_tach(){
        return $this->hasMany(activite::class,"tache_id","id");
    }

    public function statut_tach(){
        return $this->belongsTo(statut::class,"statut_id","id");
    }

    public function project(){
        return $this->belongsTo(projet::class,"projet_id","id");
    }




}
