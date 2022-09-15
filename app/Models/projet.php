<?php

namespace App\Models;

use App\Models\activite;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class projet extends Model
{
    use HasFactory;
    public $guarded = [];
    public $table = "projets";


    public function opportunite_projet(){
        return $this->belongsTo(opportunite::class,"opportunite_id","id");
    }

    public function activite_projet(){
        return $this->hasMany(activite::class,"projet_id","id");
    }

    public function catProjet_projet(){
        return $this->belongsTo(cat_projet::class,"catpro_id","id");
    }

    public function tachs(){
        return $this->hasMany(tache::class,"projet_id","id");
    }
    public function conv_projrt(){
        return $this->hasMany(projet::class,"id","id");
    }

    public function statut_projet(){
        return $this->belongsTo(statut::class,"statu_id","id");
    }
}
